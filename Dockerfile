FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Use envsubst template (DigitalOcean-compatible)
COPY default.conf.template /etc/nginx/templates/default.conf.template

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]