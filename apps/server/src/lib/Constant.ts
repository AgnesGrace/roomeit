import dotenv from 'dotenv'
dotenv.config()

if (!process.env.JWT_SECRET) {
  throw new Error('missing JWT_SECRET')
}
export const JWT_SECRET = process.env.JWT_SECRET
