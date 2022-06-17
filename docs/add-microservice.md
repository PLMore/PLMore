# Contributing with a new microservice

This section will cover the steps to properly generate a new microservice.

## 1. Generating a new app

You should use the nest-cli for this. Use the following command:

```
nest generate app {Your microservice name}
```

## 2. Adding it to the compose file for the dev environment

First you should create a new Dockerfile under the
`apps/{your_microservice_name}`. You can use this format and change what's
necessary:

```Dockerfile
FROM node:14.16.1-alpine3.11
# As development

LABEL maintainer="Your email"
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
WORKDIR /usr/src/app


COPY package.json .
RUN npm install @nestjs/cli -g
RUN npm install --production=false

RUN nest build api-gateway
# COPY . .
CMD nest start api-gateway --watch
```

Since compose will only be used for development/staging, We don't copy the
source code inside the container and build from it, we directly mount it so we
can make use of nest hot code reload when developing. You can use this service
sample:

```YAML
  new-microservice:
    container_name: ${APP_NAME}-NEW-MICROSERVICE
    build:
      context: .
      dockerfile: apps/new-microservice/Dockerfile
    image: mellywins/ezyfs-new-microservice:latest
    volumes:
      - .:/usr/src/app
      - /usr/src/app/node_modules
    ports:
      - X:3000
    # Make sure that the ip you assign is not previously taken.
    # This is the ip adress pool: 172.28.0.0/16
    networks:
      webnet:
        ipv4_address: 172.28.1.2

```

## 3. Microservice Config

We currently use Consul to fetch microservices' config from a Config Server.
Every app should have a `config.json` and a `consul.bootstrap.yml` file under
`apps/{your_new_microservice}`.

**config.json:**

Every microservice must have atleast the genesis config block called
`BaseConfig`

```JSON
{
    "app":{
        "name":"your_service_name",
        "port":your_service_port
    }
}
```

After creating the file you need to create a type for this config under
`libs/internal/interfaces/configs/{your_microservice_name}.ts`. You have
building blocks in the folder config-blocks within that directory that you can
use to build the type you need. Here is an example:

```Typescript
export type RegistrationAuthorityConfig = BaseConfig & {
  database: PostgresConfig & RedisConfig;
} & {
  auth: {
    enableJwtAuth: boolean;
    enableSessionAuth: boolean;
    jwtSettings: {
      secret: string;
      expiresIn: number;
    };
  };
};
```

**consul.bootstrap.yml** You can copy the following file and insert it under
`apps/{your_new_microservice}/src`

```YAML
consul:
  host: localhost
  port: 8500
config:
  key: ezyfs/config/${{ service.name }}
nats:
  url: nats://localhost:4222
redis:
  host: localhost
  port: 6379
  password: ''
app:
  auth:
    sessionKey: 'session.app'
    domain: ''
    resave: true
    rolling: true
    saveUninitialized: false
    cookieMaxAge: '200H' # THIS SHOULD BE IN DURATION FORMAT 2S, 2H, 2M
    secure: false
    sessionSecret: 'DKPp4JJyGdr3cPyHxxYJKb4m83AJLcNCjnt77GZG9Bh8PuBDNQBkj9BskcwvLQNB3zJhE5zkPkQjrEmzJzrsE74eAF8V4aZVMVkHFTEdGGAw6qpDkCKjNtDFd95'
service:
  discoveryHost: localhost
  healthCheck:
    timeout: 1s
    interval: 10s
    tcp: ${{ service.discoveryHost }}:${{ service.port }}
  maxRetry: 5
  retryInterval: 5000
  tags: ['v1.0.0', 'api']
  name: io.plmore.api-gateway
  port: 3002
loadbalance:
  ruleCls: RandomRule
logger:
  level: info
  transports:
    - transport: console
      level: debug
      colorize: true
      datePattern: YYYY-MM-DD h:mm:ss
      label: ${{ service.name }}
    - transport: file
      name: info
      filename: info.log
      datePattern: YYYY-MM-DD h:mm:ss
      label: ${{ service.name }}
      # 100M
      maxSize: 104857600
      json: false
      maxFiles: 10
    - transport: dailyRotateFile
      filename: info.log
      datePattern: YYYY-MM-DD-HH
      zippedArchive: true
      maxSize: 20m
      maxFiles: 14d

```

It's not really important in the development phase but it's good practice to
keep it.

After declaring the config schema, you can now register the config in the Consul
server by running the script `scripts/service-register.sh`

Now you can inject the Consul Module in your module factory and fetch your
microservice config from the server. You can find examples in the api-gateway or
registration-authority services.

The next time, you can start up the development containers using
`scripts/start-dev.sh`. It'll run the containers, register the services is
consul and attach the compose logs to the current terminal.
