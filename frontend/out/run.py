import os
import mimetypes

default = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".png": "image/png"
    # Add more file extensions and corresponding MIME types as needed
}

def get_mime_type(file_path):
    mime_type, _ = mimetypes.guess_type(file_path)
    return mime_type if mime_type else "unknown"

def map_extension_to_mime_type(directory):
    results = {}

    for root, _, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            file_extension = os.path.splitext(file)[1]

            mime_type = get_mime_type(file_path)

            if file_extension in default:
                results[file_extension] = default[file_extension]
            else:
                results[file_extension] = mime_type

    return results

# Usage: Provide the current directory as an argument
directory = "."  # Replace with your desired directory
extension_to_mime_type = map_extension_to_mime_type(directory)

# Print the mapped extensions and MIME types
for extension, mime_type in extension_to_mime_type.items():
    print(f" \"{extension}\" = \"{mime_type}\"")
