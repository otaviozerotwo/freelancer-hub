FROM ubuntu/bind9:latest

RUN apt-get update && \
    apt-get install -y vim iputils-ping net-tools systemctl && \
    apt-get clean

WORKDIR /etc/bind

COPY ./named.conf.local /etc/bind/

COPY ./db.freelancer-hub.com /etc/bind/

EXPOSE 53/tcp 53/udp
