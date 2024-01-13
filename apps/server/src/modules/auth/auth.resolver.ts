import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { AuthModel } from './auth.model'
import { UserModel } from '../../user/user.model'
import { User } from '@prisma/client'
import { Query } from '@nestjs/graphql/dist/decorators/query.decorator'
import { Headers } from '@nestjs/common'
import { ConfirmAuthorizationModel } from './confirmAuthorization.model'

@Resolver((of) => AuthModel)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation((returns) => AuthModel)
  async confirmRegistration(
    @Args('email', { type: () => String }) email: string,
    @Args('code', { type: () => String }) code: string, // Добавлен аргумент code
    @Args('name', { type: () => String }) name: string // Добавлен аргумент code
  ) {
    return this.authService.confirmRegistration({ email, code, name })
  }

  @Mutation((returns) => ConfirmAuthorizationModel)
  async confirmAuthorization(
    @Args('email', { type: () => String }) email: string,
    @Args('code', { type: () => String }) code: string // Добавлен аргумент code
  ) {
    return this.authService.confirmAuthorization({ email, code })
  }

  @Mutation((returns) => AuthModel)
  async registration(@Args('email', { type: () => String }) email: string) {
    return this.authService.register({ email })
  }

  @Mutation((returns) => AuthModel)
  async login(@Args('email', { type: () => String }) email: string) {
    return this.authService.login({ email })
  }

  @Query((returns) => UserModel)
  async profile(@Headers('Authorization') token: string): Promise<User> {
    console.log('token', token)
    return this.authService.getProfile(token)
  }
}
