
FROM node:18-alpine

WORKDIR /app


COPY package*.json ./


RUN npm ci


COPY . .


ENV NEW_RELIC_NO_CONFIG_FILE=true
ENV NEW_RELIC_APP_NAME="devops"
ENV NEW_RELIC_LICENSE_KEY="6786124f81127b18d3590b41755b4233FFFFNRAL"


EXPOSE 3000

CMD ["node", "-r", "newrelic", "index.js"]
