import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { GetMoviesQueryDto } from './dto/get-movies-query.dto.js';
import { Movie } from './entities/movie.entity.js';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly moviesRepository: Repository<Movie>,
  ) {}

  async findAll(query: GetMoviesQueryDto) {
    const { page, limit, sort } = query;

    const skip = (page - 1) * limit;

    const movies = await this.findMoviesQueryBuilder(sort)
      .skip(skip)
      .take(limit)
      .getRawAndEntities();

    const total = await this.moviesRepository.count();

    const data = movies.entities.map((movie, index) =>
      this.withAverageRating(movie, movies.raw[index].averageRating),
    );

    return {
      data,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: number) {
    const movies = await this.findMoviesQueryBuilder('year_desc')
      .where('movie.id = :id', { id })
      .getRawAndEntities();

    const movie = movies.entities[0];

    if (!movie) {
      return null;
    }

    return this.withAverageRating(movie, movies.raw[0].averageRating);
  }

  private findMoviesQueryBuilder(sort: 'year_desc' | 'year_asc') {
    const direction = sort === 'year_asc' ? 'ASC' : 'DESC';

    return this.moviesRepository
      .createQueryBuilder('movie')
      .leftJoin('reviews', 'review', 'review.movie_id = movie.id')
      .select([
        'movie.id',
        'movie.uuid',
        'movie.title',
        'movie.releaseYear',
        'movie.runtimeMinutes',
        'movie.overview',
        'movie.posterUrl',
        'movie.trailerUrl',
        'movie.language',
      ])
      .addSelect('AVG(review.rating)', 'averageRating')
      .groupBy('movie.id')
      .orderBy('movie.releaseYear', direction)
      .addOrderBy('movie.title', 'ASC');
  }

  private withAverageRating(movie: Movie, averageRating: unknown): Movie & {
    averageRating: number | null;
  } {
    return {
      ...movie,
      averageRating: averageRating ? Number(averageRating) : null,
    };
  }
}