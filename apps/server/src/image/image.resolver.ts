import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { FileUpload, GraphQLUpload } from 'graphql-upload'
import { ImageService } from '@/image/image.service'
import { ImageModel } from '@/image/image.model'
import { Image } from '../../prisma/generated/client'

@Resolver()
export class ImageResolver {
  constructor(private readonly fileService: ImageService) {}

  @Mutation(() => ImageModel)
  async uploadAvatar(
    @Args({ name: 'file', type: () => GraphQLUpload }) { createReadStream, filename }: FileUpload
  ): Promise<Image> {
    return this.fileService.uploadFile(createReadStream, filename, 'user/avatar')
  }
}
