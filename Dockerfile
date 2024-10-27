
FROM node:18-alpine

RUN npm install newrelic --save

WORKDIR /app


COPY package*.json ./


RUN npm ci


COPY . .


EXPOSE 3000


CMD ["node", "-r", "newrelic", "index.js"]