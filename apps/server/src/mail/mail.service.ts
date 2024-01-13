import { Injectable } from '@nestjs/common'
import { MailerService } from '@nestjs-modules/mailer'
import { FindArgs, MailRepository } from './mail.repository'
import { mailTemplatesT } from '../Models'

export interface sendEmailProps {
  email: string
  theme: string
  template: mailTemplatesT
  context: {
    name?: string
    code: string
  }
  code?: string
}

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService, private readonly mailRepository: MailRepository) {}
  async sendEmail(emailData: sendEmailProps) {
    const statusMessageData = await this.mailerService.sendMail({
      to: emailData.email,
      subject: emailData.theme,
      template: emailData.template,
      context: emailData.context,
    })
    await this.mailRepository.createEmail(emailData, statusMessageData)
  }

  async sendVerificationEmail(emailData: sendEmailProps) {
    const statusMessageData = await this.mailerService.sendMail({
      to: emailData.email,
      subject: emailData.theme,
      template: emailData.template,
      context: emailData.context,
    })
    await this.mailRepository.createVerificationEmail(emailData, statusMessageData)
  }

  async findEmail(data: FindArgs) {
    return this.mailRepository.findEmail(data)
  }

  async addAttempt(emailId: number) {
    return this.mailRepository.addAttempt(emailId)
  }
}
