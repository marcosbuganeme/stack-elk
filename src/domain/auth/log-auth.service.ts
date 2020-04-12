import { LogAuth } from "./log-auth.model"
import ElasticSearchClient from "../../components/elasticsearch"

class LogAuthService {
  async saveToIndex(data: LogAuth) {

    data.date = new Date()

    return await ElasticSearchClient
      .index({ index: 'log-auth', body: data })
      .catch(error => error)
  }
}

export default new LogAuthService()