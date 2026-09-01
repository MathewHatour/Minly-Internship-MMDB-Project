import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';

import { MoviesService } from './movies.service.js';
import { GetMoviesQueryDto } from './dto/get-movies-query.dto.js';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  findAll(@Query() query: GetMoviesQueryDto) {
    return this.moviesService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const movieId = Number(id);

    if (!Number.isInteger(movieId)) {
      throw new BadRequestException('Invalid movie id');
    }

    const movie = await this.moviesService.findOne(movieId);

    if (!movie) {
      throw new NotFoundException('Movie not found');
    }

    return movie;
  }
}