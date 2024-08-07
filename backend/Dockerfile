FROM node:latest

RUN apt-get update && apt-get install -y vim

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm install

RUN npm install nodemon -g --quiet

COPY . .

EXPOSE 3000

CMD [ "nodemon", "index.js"]