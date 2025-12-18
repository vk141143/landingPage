# ---------- Build stage ----------
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- Runtime stage ----------
FROM nginx:alpine

# Remove default site config
RUN rm /etc/nginx/conf.d/default.conf

# Copy nginx template (App Platform compatible)
COPY default.conf.template /etc/nginx/templates/default.conf.template

# Copy Vite build output
COPY --from=builder /app/dist /usr/share/nginx/html

# App Platform injects PORT
ENV PORT=8080

CMD ["nginx", "-g", "daemon off;"]
