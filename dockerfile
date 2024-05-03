# Stage 1: Build the Angular application
FROM node:16-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the project for production
RUN npm run build -- --output-path=./dist/out --configuration production

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/out /usr/share/nginx/html

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# Define the command to run your app using CMD which defines your runtime
CMD ["nginx", "-g", "daemon off;"]
