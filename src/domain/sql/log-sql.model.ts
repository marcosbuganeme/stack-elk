export interface LogSql {
  date: Date
  tenantId: string
  applicationId: string
  sql: string
  sqlDetail?: string
  table?: string
  joins?: Array<string>
  filters?: Array<any>
}