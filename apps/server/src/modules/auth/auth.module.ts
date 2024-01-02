import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { PrismaService } from '../../prisma/prisma.service'
import { MailService } from '../../mail/mail.service'
import { AuthResolver } from './auth.resolver'
import { MailRepository } from '../../mail/mail.repository'
import { UserService } from '../../user/user.service'
import { UserRepository } from '../../user/user.repository'
import { JwtModule } from '@nestjs/jwt'
import { constants } from '../../core/libs/constants'

@Module({
  providers: [AuthResolver, AuthService, UserService, UserRepository, MailService, MailRepository, PrismaService],
  imports: [
    JwtModule.register({
      global: true,
      secret: constants.JWT_SECRET,
      signOptions: { expiresIn: '120000s' },
    }),
  ],
})
export class AuthModule {}
