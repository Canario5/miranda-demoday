FROM node:20

# Install dependencies required for Puppeteer/Chromium
RUN apt-get update && \
    apt-get install -y \
    gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
    libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 \
    libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 \
    libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 \
    libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 \
    libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 \
    lsb-release xdg-utils wget

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of your app's source code
COPY . .

# Build your site (runs Vite build, generates critical CSS, etc.)
RUN npm run build

# Serve the built static files with a simple server (e.g., serve)
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "tcp://0.0.0.0:3000"]
