import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { ILike, Repository } from 'typeorm';
import { CreateBlogDto } from './dtos/create-blog.dto';
import { BlogSearchCriteriaDto } from './dtos/blog-search-criteria.dto';

@Injectable()
export class BlogsService {

    constructor(@InjectRepository(Blog) private repo: Repository<Blog>) {}

    async createBlog(blogDto: CreateBlogDto) {

        const blog = await this.repo.findOne({
            where: { titulo : blogDto.titulo }
        });
       
        if ( blog ) throw new BadRequestException(`El titulo '${blogDto.titulo}', ya se encuentra en uso`);
        
        const newBlog = this.repo.create(blogDto);

        return this.repo.save(newBlog);
    }

    async filterBlogsBySearchCriteria(searchCriteria: BlogSearchCriteriaDto) {

        const criteria = Object.entries(searchCriteria).map(([key, value]) =>  ({[key]: ILike(`${value}%`)}));

        if ( !criteria.length ) throw new BadRequestException('No proporciono criterios de busqueda validos');
        
        const blogs = await this.repo.find({
            where: criteria
        });

        if ( !blogs.length ) throw new NotFoundException('No se encontraron coincidencias');

        return blogs;
        
    }

    getBlogs() {

        return this.repo.find();

    }
}
