import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

process.on('SIGTERM', () => {
  console.log('Disconnecting from roomeit database, bye...')

  void prisma.$disconnect()
})

export default prisma
