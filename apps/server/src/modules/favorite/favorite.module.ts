import { Module } from '@nestjs/common'
import { FavoriteResolver } from './favorite.resolver'
import { FavoriteService } from './favorite.service'
import { FavoriteRepository } from './favorite.repository'
import { UserModule } from '@/modules/user/user.module'
import { HotelModule } from '@/modules/hotel/hotel.module'
import { AuthModule } from '../auth/auth.module'

@Module({
  providers: [FavoriteResolver, FavoriteService, FavoriteRepository],
  imports: [UserModule, HotelModule, AuthModule],
  exports: [FavoriteService, FavoriteRepository],
})
export class FavoriteModule {}
