import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Observable } from 'rxjs'
import { AuthService } from './auth.service'

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor(private readonly authService: AuthService) {}

  // Use async to allow the use of await within the intercept method
  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    // Get the GraphQL context and token
    const ctx = GqlExecutionContext.create(context)
    const token = ctx.getContext().req.headers.authorization

    if (!token) {
      return next.handle().pipe()
    }

    // Fetch user information asynchronously using await
    const user = await this.authService.getUser(token)

    // Log user information
    const req = ctx.getContext()
    req.user = {}
    req.user.id = user.sub
    req.user.username = user.username
    return next.handle()
  }
}
