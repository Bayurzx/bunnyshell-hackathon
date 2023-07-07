# Use the base image with Node.js 18.14
FROM cimg/node:18.14

# Set the working directory
WORKDIR ./backend

# Copy the project files to the container
# note that there are some files that will be ignored in .dockerignore
COPY . .

# Install dependencies using Yarn
RUN yarn

# Run the tests using Cypress
CMD ["yarn", "test"]
