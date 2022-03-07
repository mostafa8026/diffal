import { Post } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostEntity } from './post.entity';

@EntityRepository(Post)
export class PostRepository extends Repository<PostEntity> {
  async createPost(createPostDto: CreatePostDto) {
    const post = this.create({
      ...createPostDto,
    });
    return this.save(post);
  }
}
