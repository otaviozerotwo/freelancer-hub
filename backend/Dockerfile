FROM node:latest

# Instala o editor de texto vi
RUN apt-get update && apt-get install -y vim

WORKDIR /usr/src/server

# Dependências back-end
COPY package*.json ./

RUN npm install

RUN npm install nodemon -g --quiet

COPY . .

EXPOSE 7777

CMD [ "nodemon", "index.js"]