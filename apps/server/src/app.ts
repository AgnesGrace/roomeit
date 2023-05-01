import express from 'express'
import { Server } from 'http'
import dotenv from 'dotenv'
import router from './router'
import ConsoleLogger from './lib/logger'

dotenv.config()
const app = express()
app.use(express.json())
app.use(router)

export function startServer(): Server {
  const PORT = process.env.PORT ?? 8001
  const server = app.listen(PORT, () => {
    ConsoleLogger.info(`The Roomeit🛖 server is listening on port ${PORT}`)
  })
  process.on('SIGTERM', () => {
    server.close()
  })
  return server
}
export default app
