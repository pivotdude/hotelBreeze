import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { JwtModule } from '@nestjs/jwt'
import { constants } from '@/core/libs/constants'
import { AuthInterceptor } from './auth.interceptor'
import { UserModule } from '@/modules/user/user.module'
import { MailModule } from '@/modules/mail/mail.module'

@Module({
  providers: [AuthResolver, AuthService, AuthInterceptor],
  imports: [
    JwtModule.register({
      global: true,
      secret: constants.JWT_SECRET,
      signOptions: { expiresIn: '120000s' },
    }),
    MailModule,
    UserModule,
  ],
  exports: [AuthInterceptor, AuthService],
})
export class AuthModule {}
