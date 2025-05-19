# Use an official Node.js base image with a recent version
FROM node:24-slim

# Install Python and other dependencies if needed
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    python3 \
    python3-pip \
    build-essential \
    libpq-dev && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /backend

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install Node.js dependencies
RUN npm install --only=production

# Copy the rest of the application code
COPY . /backend

# Expose the port your application listens on
EXPOSE 8000

# Define the command to run your application
CMD ["node", "server.js"]