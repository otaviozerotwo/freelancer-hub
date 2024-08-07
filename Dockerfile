# Dockerfile para mongo-express
FROM mongo-express:latest

# Copiar o script wait-for-it.sh para o contêiner
COPY wait-for-it.sh /usr/local/bin/

# Dar permissão de execução ao script
RUN chmod +x /usr/local/bin/wait-for-it.sh

# Usar o script wait-for-it.sh para esperar o MongoDB
CMD ["wait-for-it.sh", "mongo:27017", "--", "tini", "--", "/docker-entrypoint.sh"]
