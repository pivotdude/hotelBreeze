import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'
import { Hotel } from '@prisma/client'
import { ContextUser } from '../Models'
import { FavoriteService } from './favorite.service'
import { FavoriteModel } from './favorite.model'
import { AuthInterceptor } from '../modules/auth/auth.interceptor'
import { UseInterceptors } from '@nestjs/common'

@UseInterceptors(AuthInterceptor)
@Resolver((of) => FavoriteModel)
export class FavoriteResolver {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Mutation((returns) => FavoriteModel)
  async follow(
    @Args('hotelUid', { type: () => String }) hotelUid: string,
    @Context('user') user: ContextUser
  ): Promise<Hotel> {
    if (!user) throw new Error('Вы не авторизованы')
    return this.favoriteService.follow(hotelUid, user?.id)
  }

  @Mutation((returns) => FavoriteModel)
  async unfollow(@Args('uid', { type: () => String }) uid: string) {
    return this.favoriteService.unfollow(uid)
  }
}
