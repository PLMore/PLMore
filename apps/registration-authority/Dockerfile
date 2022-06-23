FROM node:16.13.0-alpine3.11 
# As development

LABEL maintainer="oussama.zouaghi@insat.ucar.tn"
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
WORKDIR /usr/src/app

COPY package.json .
RUN npm install @nestjs/cli -g
RUN npm install --production=false
COPY . .
RUN nest build registration-authority
EXPOSE 3001
# CMD ["node", "dist/apps/registration-authority/main.js"]
CMD nest start registration-authority --watch


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