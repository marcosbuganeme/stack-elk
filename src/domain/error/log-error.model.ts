export interface LogError {
  date: Date
  tenantId: string
  applicationId: string
  error: string
  errorDetail?: string
  classe?: string
  method?: string
}