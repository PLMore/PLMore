import { BaseConfig } from "./config-blocks/base.config";
import { PostgresConfig } from "./config-blocks/postgres.config";
import { RedisConfig } from "./config-blocks/redis.config";

export type BoMConfig = BaseConfig & {
    database: PostgresConfig & RedisConfig
}