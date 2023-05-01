import User from '../../src/models/Users'

declare global {
  namespace Express {
    export interface Request {
      user: User
    }
  }
}
