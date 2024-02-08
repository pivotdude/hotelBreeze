import { Module } from '@nestjs/common'
import { ImageResolver } from '@/image/image.resolver'
import { ImageService } from '@/image/image.service'
import { ImageRepository } from '@/image/image.repository'

@Module({
  providers: [ImageResolver, ImageService, ImageRepository],
  imports: [],
  exports: [ImageService, ImageRepository],
})
export class ImageModule {}
