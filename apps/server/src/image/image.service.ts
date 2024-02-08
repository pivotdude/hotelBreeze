import { Injectable } from '@nestjs/common'

import { createWriteStream } from 'fs'
import { ImageRepository } from '@/image/image.repository'
import { Image } from '../../prisma/generated/client'

@Injectable()
export class ImageService {
  constructor(private readonly imageRepository: ImageRepository) {}

  async uploadFile(createReadStream: () => any, filename: string, path: string) {
    await new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(`./public/${path}/${filename}`))
        .on('finish', () => resolve(true))
        .on('error', () => reject(false))
    )
    return this.imageRepository.create({ url: `${path}/${filename}`, name: filename })
  }

  async uploadAvatar(createReadStream: () => any, filename: string): Promise<Image> {
    return this.uploadFile(createReadStream, filename, 'user/avatar')
  }
}
