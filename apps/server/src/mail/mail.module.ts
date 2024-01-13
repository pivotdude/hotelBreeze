import { Global, Module } from '@nestjs/common'
import { MailerModule } from '@nestjs-modules/mailer'
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'
import { MailService } from './mail.service'
import { PrismaService } from '../prisma/prisma.service'
import { MailRepository } from './mail.repository'

@Global()
@Module({
  imports: [
    MailerModule.forRoot({
      transport: process.env.MAIL_URL,
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
      preview: true,
      template: {
        dir: __dirname + '/../../emailTemplates',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService, PrismaService, MailRepository],
})
export class MailModule {}
