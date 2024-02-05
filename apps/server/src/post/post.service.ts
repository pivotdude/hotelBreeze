import { Injectable } from '@nestjs/common'
import { PostRepository } from './post.repository'
import { Post } from '@prisma/client'
import { PostCreateInput } from './models/PostCreateInput'

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  // async findOne(id: string): Promise<Post | null> {
  //   return this.prisma.post.findUnique({
  //     where: {
  //       id,
  //     },
  //   });
  // }

  async findAll(): Promise<Post[]> {
    return this.postRepository.findAll()
  }

  async find(id: number): Promise<Post> {
    return this.postRepository.find({ id })
  }

  async create(input: PostCreateInput): Promise<Post> {
    return this.postRepository.create(input)
  }
  //
  // async update(params: UpdatePost): Promise<Post> {
  //   const { id, ...params_without_id } = params;
  //
  // }
}
