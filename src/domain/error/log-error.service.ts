import { LogError } from "./log-error.model"
import ElasticSearchClient from "../../components/elasticsearch"

class LogErrorService {
  async saveToIndex(data: LogError) {

    data.date = new Date()

    await ElasticSearchClient
      .index({ index: 'log-error', body: data })
      .catch(error => error)
  }
}

export default new LogErrorService()