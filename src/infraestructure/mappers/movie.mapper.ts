import { CompleteMovie, Movie } from "../interfaces/movie.interface";
import { MovieDBMovieResponse } from "../interfaces/moviedb-movie.response";
import { Result } from "../interfaces/moviedb-response";

export class MovieMapper {
  static createBaseMovie = (movie: Result | MovieDBMovieResponse): Movie => ({
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    realeaseDate: new Date(movie.release_date),
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    rating: movie.vote_average,
  });

  static fromTheMovieDBToMovie = (movie: Result): Movie => {
    return {
      ...this.createBaseMovie(movie),
    };
  };

  static fromTheMovieDBToCompleteMovie = (
    movie: MovieDBMovieResponse,
  ): CompleteMovie => {
    return {
      ...this.createBaseMovie(movie),
      buget: movie.budget,
      duration: movie.runtime,
      genres: movie.genres.map((g) => g.name),
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map((c) => c.name),
    };
  };
}
