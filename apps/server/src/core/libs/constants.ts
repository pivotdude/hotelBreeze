import * as process from 'process'

export const constants = {
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  MAIL_URL: process.env.MAIL_URL || '',
}
