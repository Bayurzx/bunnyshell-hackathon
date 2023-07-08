# Use the base image with Node.js 18.14
FROM cimg/node:18.14

# Copy the backend code to the container
WORKDIR /app/backend

# Copy the backend code to the container
COPY ./backend /app/backend

# Install backend dependencies
RUN yarn

# Set the working directory
WORKDIR /app/frontend

# Copy the frontend code to the container
COPY ./frontend /app/frontend

# Install frontend dependencies and build
RUN yarn && \
    yarn build

# Set the default command to start the backend
CMD ["yarn", "start"]