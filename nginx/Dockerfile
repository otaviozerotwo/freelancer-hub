FROM nginx:latest

# Instala o editor de texto vi
RUN apt-get update && apt-get install -y vim

# Configuração do Nginx para o front-end e Mongo Express
COPY default.conf /etc/nginx/conf.d/default.conf