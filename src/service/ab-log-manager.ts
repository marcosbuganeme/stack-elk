import { LogInfo, LogInfoService } from '../domain/info'
import { LogAuth, LogAuthService } from '../domain/auth'
import { LogError, LogErrorService } from '../domain/error'
import { LogSql, LogSqlService } from '../domain/sql'

class AnbetecLogManager {
  async createLogInfo(data: LogInfo) {
    return await LogInfoService
      .saveToIndex(data)
      .then(() => console.log('Sucesso ao gravar log de informação'))
      .catch(console.error)
  }

  async createLogAuth(data: LogAuth) {
    return await LogAuthService
      .saveToIndex(data)
      .then(() => console.log('Sucesso ao gravar log de autenticação'))
      .catch(console.error)
  }

  async createLogError(data: LogError) {
    return await LogErrorService
      .saveToIndex(data)
      .then(() => console.log('Sucesso ao gravar log de erro'))
      .catch(console.error)
  }

  async createLogSql(data: LogSql) {
    return await LogSqlService
      .saveToIndex(data)
      .then(() => console.log('Sucesso ao gravar log de sql'))
      .catch(console.error)
  }
}

export default new AnbetecLogManager()