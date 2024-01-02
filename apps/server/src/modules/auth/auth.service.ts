import { Injectable } from '@nestjs/common'
import { EmailInput } from './models/EmailInput'
import { MailService } from '../../mail/mail.service'
import { FindArgs } from '../../mail/mail.repository'
import { UserService } from '../../user/user.service'
import { RegistrationInput } from './models/RegistrationInput'
import { JwtService } from '@nestjs/jwt'
import { IMessage } from '../../Models'

@Injectable()
export class AuthService {
  constructor(
    private readonly mailService: MailService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async register(input: EmailInput) {
    const code = this.#generateFourDigitCode()
    const user = await this.userService.findWhere({ email: input.email })
    if (user) {
      return { message: 'Пользователь с такой почтой уже существует', type: 'error' } as IMessage
    }
    await this.mailService.sendVerificationEmail({
      email: input.email,
      theme: 'Регистрация',
      template: 'confirmationRegistration',
      context: { code },
      code,
    })
    return { message: 'Код отправлен на почту', type: 'info' } as IMessage
  }

  async confirmRegistration(loginData: RegistrationInput) {
    console.log('lD', loginData)
    const result = await this.#checkCode({
      email: loginData.email,
      code: loginData.code,
      template: 'confirmationRegistration',
    })
    console.log('result', result)
    if (result) {
      const user = await this.userService.createUser({ email: loginData.email, roleId: 2, name: loginData.name })
      console.log(user)
      return { message: 'Вы успешно зарегистрировались', type: 'success' } as IMessage
    }
    return { message: 'Неверный код подтверждения', type: 'error' } as IMessage
  }

  #generateFourDigitCode() {
    return Math.floor(1000 + Math.random() * 9000).toString()
  }

  /**
   * Проверка кода
   * @param args
   * @private
   */
  async #checkCode(args: FindArgs) {
    const email = await this.mailService.findEmail(args)
    if (!email) {
      return { message: 'Время истекло, запросите новый код', type: 'error' } as IMessage
    }

    if (email.verificationCode.attempt > 3) {
      return { message: 'Количество попыток исчерпано, запросите новый код', type: 'error' } as IMessage
    }

    await this.mailService.addAttempt(email.id)
    console.log(email.verificationCode.code + '===' + args.code)
    return email.verificationCode.code === args.code
  }

  async login(input: EmailInput) {
    console.log(input)
    const user = await this.userService.findUser({ email: input.email })
    console.log('user', user)
    if (user) {
      const payload = { sub: user.uid, username: user.name }
      return { access_token: await this.jwtService.signAsync(payload) }
    }
    return { message: 'Пользователь не найден', type: 'error' } as IMessage
  }
}
