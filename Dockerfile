## Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Install deps first (better layer caching)
COPY package.json package-lock.json ./
RUN npm ci

# Build the app
COPY . .
RUN npm run build

## Runtime stage (static file server)
FROM nginx:1.27-alpine

# Vite outputs to /dist by default
COPY --from=build /app/dist /usr/share/nginx/html

# Single Page App routing (react-router) typically needs this:
# - try_files falls back to /index.html
RUN printf '%s\n' \
  'server {' \
  '  listen 80;' \
  '  server_name _;' \
  '  root /usr/share/nginx/html;' \
  '  index index.html;' \
  '' \
  '  location / {' \
  '    try_files $uri $uri/ /index.html;' \
  '  }' \
  '}' \
  > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
