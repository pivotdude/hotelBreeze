import { Injectable } from '@nestjs/common'
import { UserRepository } from './user.repository'
import { User } from '@prisma/client'
import { UserCreateInput } from './models/UserCreateInput'

@Injectable()
export class UserService {
  constructor(private readonly postRepository: UserRepository) {}

  // async findOne(id: string): Promise<User | null> {
  //   return this.prisma.post.findUnique({
  //     where: {
  //       id,
  //     },
  //   });
  // }

  async findAll(): Promise<User[]> {
    return this.postRepository.findAll()
  }

  async find(id: number): Promise<User> {
    return this.postRepository.find({ id })
  }

  async create(input: UserCreateInput): Promise<User> {
    return this.postRepository.create(input)
  }
  //
  // async update(params: UpdateUser): Promise<User> {
  //   const { id, ...params_without_id } = params;
  //
  // }
}
