import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dtos/create-blog.dto';
import { BlogSearchCriteriaDto } from './dtos/blog-search-criteria.dto';

@Controller('blogs')
export class BlogsController {

    constructor(private blogsService: BlogsService) {}

    @Post()
    createBlog(@Body() body: CreateBlogDto) {
        return this.blogsService.createBlog(body);
    }

    @Get()
    getBlogs() {
        return this.blogsService.getBlogs();
    }

    @Get('/searchBy')
    filterBlogsBySearchCriteria(@Query() searchCriteria: BlogSearchCriteriaDto) {
       return this.blogsService.filterBlogsBySearchCriteria(searchCriteria);
    }


}
