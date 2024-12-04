# Stage 1: Build stage
FROM node:20-alpine AS build

WORKDIR /app


COPY package*.json ./


RUN npm ci


COPY . .

# Stage 2: Production stage
FROM node:20-alpine AS production
WORKDIR /app
COPY --from=build /app .
# Set environment variables
ENV NEW_RELIC_APP_NAME="devops-monitoreo"
ENV NEW_RELIC_LOG_LEVEL="info"


EXPOSE 3000

CMD ["node", "-r", "newrelic", "index.js"]
