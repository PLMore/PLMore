FROM node:14.16.1-alpine3.11 

LABEL maintainer="oussama.zouaghi@insat.ucar.tn"
ARG NODE_ENV=production

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install @nestjs/cli -g
RUN npm install --production=false
COPY . .
RUN nest build bom
EXPOSE 3009
CMD nest start bom --watch
