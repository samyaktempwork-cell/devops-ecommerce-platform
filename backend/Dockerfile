# -------------------------------
# 1. Base Image
# -------------------------------
FROM node:20-alpine AS base
WORKDIR /app

# -------------------------------
# 2. Install dependencies
# -------------------------------
COPY package*.json ./
RUN npm install --production

# -------------------------------
# 3. Copy application source
# -------------------------------
COPY . .

# -------------------------------
# 4. Expose API port
# -------------------------------
EXPOSE 4000

# -------------------------------
# 5. Start application
# -------------------------------
CMD ["node", "server.js"]
