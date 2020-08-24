FROM node:10-slim

WORKDIR /app

COPY package*.json ./

RUM npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
