import { Client } from '@elastic/elasticsearch'

import {
  node,
  maxRetries,
  sniffOnStart,
  requestTimeout
} from '../config/elasticsearch.config'

const ElasticSearchClient = new Client({ node, maxRetries, sniffOnStart, requestTimeout })

export default ElasticSearchClient

class Fila {
  async elasticSearchIndex() {
    await ElasticSearchClient.index({
      index: 'log-info',
      body: {
        character: 'Ned Stark',
        quote: 'Winter is coming.'
      }
    })

    await ElasticSearchClient.index({
      index: 'log-sql',
      body: {
        character: 'Ned Stark',
        quote: 'Winter is coming.'
      }
    })

    await ElasticSearchClient.index({
      index: 'log-events',
      body: {
        character: 'Daenerys Targaryen',
        quote: 'I am the blood of the dragon.'
      }
    })

    await ElasticSearchClient.index({
      index: 'log-error',
      body: {
        character: 'Tyrion Lannister',
        quote: 'A mind needs books like a sword needs a whetstone.'
      }
    })

    await ElasticSearchClient.indices.refresh({ index: 'game-of-thrones' })

    const { body } = await ElasticSearchClient.search({
      index: 'log-auth',
      body: {
        query: {
          match: { quote: 'winter' }
        }
      }
    })

    console.log('body: ', body)
    console.log('hits: ', body.hits)
    console.log('hits.hits: ', body.hits.hits)
  }
}