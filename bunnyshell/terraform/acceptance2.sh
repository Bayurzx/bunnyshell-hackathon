sudo apt-get install curl

expected_title="Online Safety Game"
url="http://onlinesafety-bunnyshell-$1.s3-website-us-east-1.amazonaws.com"
max_attempts=4
attempt=1
echo "URL: $url"

while [ $attempt -le $max_attempts ]; do
    echo "Attempt $attempt:"
    echo "Fetching title using CURL..."

    # Fetch the title using curl and extract the text between <title> tags
    title=$(curl -s "$url" -m 300 | grep -o '<title>[^<]*' | sed 's/<title>//')

    if [ -n "$title" ]; then
        echo "Title from CURL is: $title"

        # Compare the fetched title with the expected title
        if [ "$title" = "$expected_title" ]; then
            echo "Title is correct: $title"
            echo '{"passed_test":"' "$title" '"}'
            exit 0
        else
            echo "Title is not correct: $title"
            exit 1
        fi
    else
        echo "CURL returned nothing. Retrying in 3 minutes..."
        sleep 180  # Wait for 3 minutes before retrying
        attempt=$((attempt + 1))
    fi
done

echo "Reached the maximum number of attempts. Title could not be fetched."
exit 1
