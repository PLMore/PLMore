import {Injectable} from '@nestjs/common';
import {GqlModuleOptions, GqlOptionsFactory} from '@nestjs/graphql';
import {RedisCache} from 'apollo-server-cache-redis';
import {buildContext} from 'graphql-passport';
import {ConsulService} from 'nestjs-consul';
import {ConsulServiceKeys, GatewayConfig, GqlContext} from '@ezyfs/internal';
import {RedisOptions} from 'ioredis';
import {join} from 'path';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(
    private readonly consul: ConsulService<GatewayConfig>, // private readonly accessToken: AccessTokenRpcClientService, // private readonly role: RolesRpcClientService, // private readonly billing: BillingsRpcClientService, // private readonly webhook: WebhooksRpcClientService,
  ) {}

  async createGqlOptions(): Promise<ApolloDriverConfig> {
    /* Get redis config from consul */
    const gatewayConfig = await this.consul.get<GatewayConfig>(
      `${ConsulServiceKeys.API_GATEWAY}`,
    );
    const redisOptions: RedisOptions = await {
      host: gatewayConfig.databases.redis.host,
      port: gatewayConfig.databases.redis.port,
    };

    /* initialize cache */
    const cache = new RedisCache(redisOptions);
    return {
      driver: ApolloDriver,
      autoSchemaFile: join(
        process.cwd(),
        'apps/api-gateway/src/schema.graphql',
      ),

      // cors: corsApollOptions,
      context: ({req, res, payload, connection}): GqlContext => {
        const bc = buildContext({req, res});

        return {
          //@ts-ignore
          payload,
          connection,
          ...bc,
          req: {
            ...req,
            ...bc.req,
          },
        };
      },
      cache,
      /**
       * Enable this at your own detriment. Without this, namespaced mutation won't work,
       * I have taken time to make sure resolvers guards are place in the right places.
       * While extending the application, be careful
       * Here is the reason https://github.com/nestjs/graphql/issues/295
       */
      fieldResolverEnhancers: ['guards', 'interceptors'],
      playground: true,
      introspection: true,
      installSubscriptionHandlers: true,
    };
  }
}
