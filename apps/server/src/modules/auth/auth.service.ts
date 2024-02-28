import { Injectable, UnauthorizedException } from '@nestjs/common'
import { EmailInput } from './models/EmailInput'
import { MailService } from '@/modules/mail/mail.service'
import { FindArgs } from '@/modules/mail/mail.repository'
import { UserService } from '@/modules/user/user.service'
import { RegistrationInput } from './models/RegistrationInput'
import { JwtService } from '@nestjs/jwt'
import { CodeInput } from './models/CodeInput'
import { constants } from '@/core/libs/constants'

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
      throw new Error('Пользователь с такой почтой уже существует')
    }
    await this.mailService.sendVerificationEmail({
      email: input.email,
      theme: 'Регистрация',
      template: 'confirmationRegistration',
      context: { code },
      code,
    })
    return { message: 'Код отправлен на почту' }
  }

  async confirmRegistration(loginData: RegistrationInput) {
    await this.#checkCode({
      email: loginData.email,
      code: loginData.code,
      template: 'confirmationRegistration',
    })

    const user = await this.userService.createUser({ email: loginData.email, roleId: 2, name: loginData.name })
    if (user) {
      return { message: 'Вы успешно зарегистрировались' }
    }
    throw new UnauthorizedException('Неверный код подтверждения')
  }

  async login(input: EmailInput) {
    const code = this.#generateFourDigitCode()
    const user = await this.userService.findUser({ email: input.email })

    if (!user) {
      throw new Error('Пользователь с такой почтой не найден')
    }
    await this.mailService.sendVerificationEmail({
      email: input.email,
      theme: 'Авторизация',
      template: 'confirmationLogin',
      context: { code, name: user.name },
      code,
    })

    return { message: 'Код отправлен на почту' }
  }

  async confirmAuthorization({ email, code }: CodeInput) {
    const user = await this.userService.findUser({ email: email })
    if (!user) {
      throw new Error('Пользователь с такой почтой не найден')
    }

    await this.#checkCode({ email, code, template: 'confirmationLogin' })

    const payload = { sub: user.id, username: user.name }
    return { access_token: await this.jwtService.signAsync(payload), message: 'Авторизация прошла успешно', user: user }
  }

  async getUser(token: string) {
    if (token) {
      return this.jwtService.verifyAsync(token, {
        secret: constants.JWT_SECRET,
      })
    }
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
      throw new Error('Время истекло, запросите новый код')
    }

    if (email.verificationCode.attempt > 3) {
      throw new Error('Количество попыток исчерпано')
    }

    await this.mailService.addAttempt(email.id)
    console.log(email.verificationCode.code + '===' + args.code)

    if (email.verificationCode.code !== args.code) {
      throw new Error('Неверный код')
    }
  }
}
