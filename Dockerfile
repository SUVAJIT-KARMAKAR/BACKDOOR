# Use an Alpine-based Node.js image for smaller size and compatibility
FROM node:22.6.0-alpine

# Set the working directory
WORKDIR /usr/src/app

# Install build tools required for some npm modules
RUN apk add --no-cache make gcc g++ python3

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Rebuild bcrypt from source
RUN npm rebuild bcrypt --build-from-source

# Clean up build tools to keep the Docker image small
RUN apk del make gcc g++ python3

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run the application
CMD ["npx", "nodemon", "index.ts"]
