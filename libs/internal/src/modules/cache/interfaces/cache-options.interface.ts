import {ConsulServiceKeys} from '../../../enums';

export interface CacheOptions {
  ttl: number;
  prefix: string;
  consulKey: ConsulServiceKeys;
}
