enum LOG_LEVEL {
  INFO,
  WARN,
  ERROR,
  DEBUG,
  QUIET,
}
interface customConsoleLogger {
  shouldLog: (level: LOG_LEVEL) => boolean
  info: (...args: any[]) => void
  log: (...args: any[]) => void
  warn: (...args: any[]) => void
  error: (...args: any[]) => void
}

const ConsoleLogger: customConsoleLogger = {
  shouldLog(level) {
    let currentLogLevel = LOG_LEVEL.INFO
    if (process.env.ENV === 'test') {
      currentLogLevel = LOG_LEVEL.QUIET
    }
    if (process.env.LOG_LEVEL === 'test') {
      currentLogLevel = LOG_LEVEL.INFO
    }
    return level >= currentLogLevel
  },
  info(...args): void {
    ConsoleLogger.shouldLog(LOG_LEVEL.INFO) && console.info(...args)
  },
  log(...args): void {
    ConsoleLogger.shouldLog(LOG_LEVEL.DEBUG) && console.log(...args)
  },
  warn(...args): void {
    ConsoleLogger.shouldLog(LOG_LEVEL.WARN) && console.warn(...args)
  },
  error(...args): void {
    ConsoleLogger.shouldLog(LOG_LEVEL.ERROR) && console.error(...args)
  },
}

export default ConsoleLogger
