import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { blogDto } from './dto/blog.dto';

@Controller('blog')
export class BlogController {
  blogs: blogDto[];

  constructor() {
    this.blogs = [
      {
        id: 1,
        title: 'nest js',
        exception: 'nest js exception',
        description: 'Desc nest js',
      },
      {
        id: 2,
        title: 'nest js 2',
        exception: 'nest js exception',
        description: 'Desc nest js',
      },
      {
        id: 3,
        title: 'nest js 3',
        exception: 'nest js exception',
        description: 'Desc nest js',
      },
    ];
  }
  @HttpCode(200)
  @Get()
  async getAll() {
    return this.blogs;
  }

  @HttpCode(201)
  @Post()
  async create(@Body() dto: blogDto) {
    const data: blogDto = {
      id: new Date().getTime(),
      ...dto,
    };
    return [...this.blogs, data];
  }

  @HttpCode(200)
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.blogs.find((item) => item.id === Number(id));
  }

  @HttpCode(200)
  @Patch(':id')
  async putchById(@Param('id') id: string, @Body() dto: blogDto) {
    let oldData = this.blogs.find((item) => item.id === Number(id));
    oldData = dto;
    return oldData;
  }
}
