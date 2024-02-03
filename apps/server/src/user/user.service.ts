import { Injectable } from '@nestjs/common'
import { UserRepository } from './user.repository'
import { User } from '../../prisma/generated/client'
import { UserCreateInput } from './models/UserCreateInput'

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  // async findOne(id: string): Promise<User | null> {
  //   return this.prisma.post.findUnique({
  //     where: {
  //       id,
  //     },
  //   });
  // }

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

  //
  // async update(params: UpdateUser): Promise<User> {
  //   const { id, ...params_without_id } = params;
  //
  // }
}
