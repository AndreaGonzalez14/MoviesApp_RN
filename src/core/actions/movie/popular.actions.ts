import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponseMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const popularMoviesAction = async () => {
  try {
    const { data } =
      await movieApi.get<MovieDBResponseMoviesResponse>("/popular");
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    //const movies = data.results.map((movie) => {
    //return MovieMapper.fromTheMovieDBToMovie(movie);
    //});

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load popular movies";
  }
};
