import {Resolver, Query, Mutation, Args, Subscription, Int} from '@nestjs/graphql';
import { PostService } from './post.service';
import {Post, Prisma} from "@prisma/client";
import {PostModel} from "./post.model";
import {PostCreateInput} from "./models/PostCreateInput";


@Resolver(of => PostModel)
export class PostResolvers {
  constructor(private readonly postService: PostService) {}

  @Query(returns => [PostModel])
  async posts(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Query(returns => PostModel)
  async post(@Args('id', { type: () => Int }) id: number): Promise<Post> {
    const post = await this.postService.find(id);
    console.log(post);
    return post
  }

  @Mutation(returns => PostModel)
  async postCreate(@Args('input') args: PostCreateInput): Promise<Post> {
    return this.postService.create(args);
  }


  // @Mutation('updatePost')
  // async update(@Args('input') args: UpdatePost): Promise<Post> {
  //   return this.postService.update(args);
  // }
  //
  // @Mutation('deletePost')
  // async delete(@Args('id') args: string): Promise<Post> {
  //   return this.postService.delete(args);
  // }
  //
  // @Subscription('postCreated')
  // postCreated() {
  //   return pubSub.asyncIterator('postCreated');
  // }
}
