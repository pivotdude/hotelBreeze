import { Injectable } from '@nestjs/common'
import { UserRepository } from './user.repository'
import { User } from '@prisma/client'
import { UserCreateInput } from './models/UserCreateInput'
import { UserUpdateInput } from './models/UserUpdateInput'
import { ImageService } from '@/image/image.service'

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly imageService: ImageService
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll()
  }

  async findWhere(where: Partial<User>): Promise<User> {
    return this.userRepository.findWhere(where)
  }

  async createUser(input: UserCreateInput): Promise<User> {
    return this.userRepository.createUser(input)
  }

  async findUser(data: any) {
    return this.userRepository.findUser(data)
  }

  async getUserForProfile(id: number): Promise<User | null> {
    return this.userRepository.findByIdForProfile(id)
  }

  async update(params: UserUpdateInput, userId: number): Promise<User> {
    // @ts-ignore
    console.log(params)

    throw new Error('Method not implemented.')
    // await this.imageService.uploadAvatar(params.avatar, params.avatar.fileName)
    //
    // return this.userRepository.update(userId, { name: params.name, avatarId: 1 })
  }
}
