import { LogSql } from "./log-sql.model"
import ElasticSearchClient from "../../components/elasticsearch"

class LogSqlService {
  async saveToIndex(data: LogSql) {

    data.date = new Date()

    await ElasticSearchClient
      .index({ index: 'log-sql', body: data })
      .catch(error => error)
  }
}

export default new LogSqlService()