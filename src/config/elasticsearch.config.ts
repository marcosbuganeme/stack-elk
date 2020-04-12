import * as dotenv from 'dotenv'

dotenv.config()

const node: string = process.env.ELASTIC_URL_NODE
const maxRetries = 5
const sniffOnStart = true
const requestTimeout = 20000

export {
  node,
  maxRetries,
  sniffOnStart,
  requestTimeout
}