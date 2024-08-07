# Dockerfile para o Frontend
FROM nginx:latest

# Configuração do Nginx para o front-end e Mongo Express
# COPY default.conf /etc/nginx/conf.d/default.conf

# Copia todos os arquivos da pasta 'frontend' para o diretório onde o Nginx serve os arquivos estáticos
COPY . /usr/share/nginx/html

# Expõe a porta 80 para que o contêiner possa receber tráfego HTTP
EXPOSE 80

# Define o comando padrão a ser executado quando o contêiner iniciar
CMD ["nginx", "-g", "daemon off;"]
