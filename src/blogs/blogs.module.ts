import { Module } from '@nestjs/common';
import { BlogsController } from './blogs/blogs.controller';
import { BlogsService } from './blogs/blogs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blogs/entities/blog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Blog])],
  controllers: [BlogsController],
  providers: [BlogsService]
})
export class BlogsModule {}
