import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'uuid', unique: true })
  uuid: string;

  @Column()
  title: string;

  @Column({ name: 'release_year', type: 'integer' })
  releaseYear: number;

  @Column({ name: 'runtime_minutes', type: 'integer', nullable: true })
  runtimeMinutes: number | null;

  @Column({ type: 'text', nullable: true })
  overview: string | null;

  @Column({ name: 'poster_url', type: 'text', nullable: true })
  posterUrl: string | null;

  @Column({ name: 'trailer_url', type: 'text', nullable: true })
  trailerUrl: string | null;

  @Column({ type: 'text', nullable: true })
  language: string | null;
}
