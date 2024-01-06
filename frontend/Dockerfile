# Use a single stage for building the React app
FROM node:17-alpine as builder 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build the React app
RUN npm run build

# Stage 2: Use Nginx to serve the static files
FROM nginx:1.19.0

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

# Copy the build artifacts from the builder stage
COPY --from=builder /app/build .

# Copy the custom Nginx configuration file to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf



# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

# The CMD or ENTRYPOINT instruction is not necessary in this context
