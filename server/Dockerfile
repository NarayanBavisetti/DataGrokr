# Dockerfile for React client

# Build react client
FROM node:16.13.0

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm install 

# Copy app source code
COPY . .

# Exports
EXPOSE 5000

CMD ["npm","start"]