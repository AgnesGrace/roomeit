import { Server } from 'http'

declare namespace Express {
  export interface Application {
    start: () => Server
  }
}
