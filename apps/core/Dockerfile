FROM node:14.18.1-alpine3.11 
# As development

LABEL maintainer="oussama.zouaghi@insat.ucar.tn"
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
WORKDIR /usr/src/app


COPY package.json .
RUN npm install @nestjs/cli -g
RUN npm install --production=false
COPY . .

RUN nest build core
# COPY . .
CMD nest start core --watch


# FROM node:14.16.1-alpine3.11 as production

# LABEL maintainer="oussama.zouaghi@insat.ucar.tn"
# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install --only=production

# COPY . .


# COPY --from=development /usr/src/app/dist/ ./dist
# ENTRYPOINT [ "node","dist/apps/registration-authority/main.js" ]