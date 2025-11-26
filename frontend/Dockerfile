# -------------------------------
# 1. Build Stage - Vite
# -------------------------------
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# -------------------------------
# 2. Production Stage - Nginx
# -------------------------------
FROM nginx:1.25-alpine

# Copy Vite build to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Replace default Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
