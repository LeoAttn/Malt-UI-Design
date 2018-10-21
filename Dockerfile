FROM node:10.12.2-slim

RUN apt-get update \
    && echo "***************************************" \
    && echo "System installation" \
    && echo "***************************************" \
    && apt-get install -y --no-install-recommends \
        python \
        make \
        g++ \
        nano \
        git \
        openssl \
        net-tools \

ADD ./ /usr/src/app/

RUN echo "***************************************" \
    && echo "backend app installation" \
    && echo "***************************************" \
        && cd /usr/src/app \
        && npm install

# for terminal support (ie : use of nano in docker exec -it )
ENV TERM xterm

ENV NODE_ENV production

WORKDIR /usr/src/app

EXPOSE 3000

CMD ['node', '.']