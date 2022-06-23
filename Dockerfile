FROM node:16.13.0-alpine3.11 As development

LABEL maintainer="oussama.zouaghi@insat.ucar.tn"

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install 

COPY . .

RUN npm run build



FROM node:16.13.0-alpine3.11 as production

LABEL maintainer="oussama.zouaghi@insat.ucar.tn"
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .


COPY --from=development /usr/src/app/dist ./dist

ENTRYPOINT [ "npm","run","start:prod" ]