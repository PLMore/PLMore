FROM node:14.18.1-alpine3.11 As development
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install 
COPY . .
RUN npm run build


FROM ubuntu:20.04 as production
RUN apt-get update && apt-get -y install curl wget
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt -y install nodejs systemctl
LABEL maintainer="oussama.zouaghi@insat.ucar.tn"
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
## ------------ Postgres installation --------------- ##
ENV  TZ="Africa/Tunis"
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN echo "deb http://apt.postgresql.org/pub/repos/apt/ focal-pgdg main" >> /etc/apt/sources.list.d/pgdg.list
RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | \
  apt-key add - \
  && apt-get update
RUN apt-get update \
  && apt-get install -y postgresql postgresql-contrib \
  && apt-get install sudo \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
# copy working ph_hba.conf with trust for localhost connection_string
COPY docker/pg_hba.conf /etc/postgresql/9.6/main/pg_hba.conf
## ------------- Redis Installation -------------------## 
RUN apt-get update && \
      apt install -y redis-server
RUN sed -i 's/supervised no/supervised systemd/g' /etc/redis/redis.conf
# RUN systemctl enable redis-server
# RUN systemctl start redis-server.service
# RUN /etc/init.d/postgresql start
COPY docker/startup.sh /tmp/startup.sh
RUN chmod +x /tmp/startup.sh
COPY . .
COPY --from=development /usr/src/app/dist ./dist
ENTRYPOINT [ "/tmp/startup.sh" ]

