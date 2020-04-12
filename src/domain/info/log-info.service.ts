import { LogInfo } from './log-info.model'
import ElasticSearchClient from '../../components/elasticsearch'

class LogInfoService {
  async saveToIndex(data: LogInfo) {

    data.date = new Date()

    return await ElasticSearchClient
      .index({ index: 'log-info', body: data })
      .catch(error => error)
  }
}

export default new LogInfoService()