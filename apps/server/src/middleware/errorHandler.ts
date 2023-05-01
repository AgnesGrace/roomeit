import { Request, Response, NextFunction } from 'express'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import ConsoleLogger from '../lib/logger'

function errorHandler(
  error: Error,
  _: Request,
  res: Response,
  next: NextFunction
): void {
  if (error.constructor === PrismaClientKnownRequestError) {
    const prismaError = error as PrismaClientKnownRequestError
    res.status(400).json(prismaCustomErr(prismaError))
    return next()
  } else if (error.message) {
    res.status(400).json({ error: error.message })
    return next()
  }
  ConsoleLogger.error(error)
  res.status(500).send('Something went wrong')
  return next()
}

function prismaCustomErr(error: PrismaClientKnownRequestError): PrismaErrorMsg {
  let message = ''
  switch (error.code) {
    case 'P2002': {
      const target: string[] = error.meta?.target as string[]
      message = `${target.join('')} already exists`
      break
    }
  }
  return { error: message }
}
export default errorHandler
