import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';

import { BalancerV2PoolTokenFetcher } from '../common/balancer-v2.pool.token-fetcher';

@PositionTemplate()
export class ArbitrumBalancerV2PoolTokenFetcher extends BalancerV2PoolTokenFetcher {
  groupLabel = 'Pools';
  subgraphUrl = 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-arbitrum-v2?source=zapper';
  vaultAddress = '0xba12222222228d8ba445958a75a0704d566bf2c8';
}
