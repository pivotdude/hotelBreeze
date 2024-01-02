import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { sendEmailProps } from './mail.service'
import { mailTemplatesT } from '../Models'
import dayjs from '../core/libs/dayjs'

export interface FindArgs {
  email: string
  code: string
  template: mailTemplatesT
}

@Injectable()
export class MailRepository {
  constructor(private prismaService: PrismaService) {}

  async createEmail(emailData: sendEmailProps, statusMessageData) {
    return this.prismaService.sentEmail.create({
      data: {
        theme: emailData.theme,
        email: emailData.email,
        data: statusMessageData,
        context: emailData.context,
        template: emailData.template,
      },
    })
  }

  async createVerificationEmail(emailData: sendEmailProps, statusMessageData) {
    return this.prismaService.sentEmail.create({
      data: {
        theme: emailData.theme,
        email: emailData.email,
        data: statusMessageData,
        context: emailData.context,
        template: emailData.template,
        verificationCode: {
          create: {
            code: emailData.code,
            expired: dayjs().add(3, 'minutes').toDate(),
            type: {
              connect: {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                code: emailData.template,
              },
            },
          },
        },
      },
    })
  }

  async findEmail({ email, code, template }: FindArgs) {
    return this.prismaService.sentEmail.findFirst({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        email,
        verificationCode: {
          type: {
            code: template,
          },
          expired: {
            gt: dayjs().toDate(),
          },
        },
      },
      include: {
        verificationCode: true,
      },
    })
  }

  async addAttempt(emailId: number) {
    return this.prismaService.sentEmail.update({
      where: {
        id: emailId,
      },
      data: {
        verificationCode: {
          update: {
            attempt: {
              increment: 1,
            },
          },
        },
      },
    })
  }
}
