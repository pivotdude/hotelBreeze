import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { AuthModel } from './auth.model'

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

  @Mutation((returns) => AuthModel)
  async signup(@Args('email', { type: () => String }) email: string) {
    return this.authService.register({ email })
  }

  @Mutation((returns) => AuthModel)
  async signin(@Args('email', { type: () => String }) email: string) {
    const result = await this.authService.login({ email })
    console.log('rws', result)
    return result
  }
}
