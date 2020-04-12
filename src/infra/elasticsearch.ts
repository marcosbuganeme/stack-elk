import { Client } from '@elastic/elasticsearch'

import {
  node,
  maxRetries,
  sniffOnStart,
  requestTimeout
} from '../config/elasticsearch.config'

const ElasticSearchClient = new Client({ node, maxRetries, sniffOnStart, requestTimeout })

export default ElasticSearchClient