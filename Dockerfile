FROM node:18.10.0-alpine3.15
COPY . /home/app
WORKDIR /home/app

ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]