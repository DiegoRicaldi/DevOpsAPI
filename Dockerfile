
FROM node:20-alpine

WORKDIR /app


COPY package*.json ./


RUN npm ci


COPY . .


ENV NEW_RELIC_NO_CONFIG_FILE=true
ENV NEW_RELIC_APP_NAME="devops-monitoreo"
ENV NEW_RELIC_LICENSE_KEY="f1f3b9bc5dcfdd80d2ba8b910bb0c92fFFFFNRAL" 
ENV NEW_RELIC_LOG_LEVEL="info"


EXPOSE 3000

CMD ["node", "-r", "newrelic", "index.js"]
