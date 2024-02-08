import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ImageService } from '@/image/image.service'

@Controller('cats')
export class AppController {
  constructor(private readonly imageService: ImageService) {}
  @Get()
  hello(): string {
    return 'Hello World!'
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file)
    // return this.imageService.uploadAvatar(file, 'avatar')
  }
}
