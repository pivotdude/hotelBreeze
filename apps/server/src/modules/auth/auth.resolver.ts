import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { AuthModel } from './models/auth.model'
import { ConfirmAuthorizationModel } from './models/confirmAuthorization.model'
import { UserModel } from '@/modules/user/user.model'
import { UserService } from '@/modules/user/user.service'
import { ContextUser } from '@/Models'
import { AuthInterceptor } from './auth.interceptor'
import { UseInterceptors } from '@nestjs/common'

@Resolver((of) => AuthModel)
@UseInterceptors(AuthInterceptor)
export class AuthResolver {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {}

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
  async profile(@Context('user') user: ContextUser): Promise<any> {
    return this.userService.getUserForProfile(user.id)
  }
}
