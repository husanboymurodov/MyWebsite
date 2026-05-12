# Build Stage
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Production Stage (Nginx)
FROM nginx:stable-alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config if needed (optional, using default here)
# For SPA routing support, you'd typically add a custom nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
