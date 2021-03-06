import {Request as ExpressRequest} from 'express';
import {DataSource} from 'apollo-datasource';
import {PassportSubscriptionContext, PassportContext} from 'graphql-passport';
// import {
//   AccessTokenRpcClientService,
//   AccountsRpcClientService,
//   BillingsRpcClientService,
//   RolesRpcClientService,
//   TenantsRpcClientService,
//   WebhooksRpcClientService,
// } from '@ultimatebackend/core/services';
import {Context} from 'apollo-server-core/src/types';
// eslint-disable-next-line import/no-unresolved
import {User} from '@ezyfs/repositories/entities';

// export interface IRequest extends ExpressRequest {
//   tenantInfo?: TenantInfo;
// }
export interface GqlContext
  extends Partial<PassportContext<User, ExpressRequest> & Context> {
  connection?: any;
  rpc: {
    // account: AccountsRpcClientService;
    // tenant: TenantsRpcClientService;
    // accessToken: AccessTokenRpcClientService;
    // role: RolesRpcClientService;
    // billing: BillingsRpcClientService;
    // webhook: WebhooksRpcClientService;
  };
}

export interface GqlSubscriptionContext
  extends PassportSubscriptionContext<User, ExpressRequest>,
    DataSource {}
