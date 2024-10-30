
FROM node:20-alpine

WORKDIR /app


COPY package*.json ./


RUN npm ci


COPY . .


ENV NEW_RELIC_NO_CONFIG_FILE=true
ENV NEW_RELIC_APP_NAME="devops"



EXPOSE 3000

CMD ["node", "-r", "newrelic", "index.js"]
