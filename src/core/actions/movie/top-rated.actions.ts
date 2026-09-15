import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponseMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const topRatedMoviesAction = async () => {
  try {
    const { data } =
      await movieApi.get<MovieDBResponseMoviesResponse>("/top_rated");
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    //const movies = data.results.map((movie) => {
    //return MovieMapper.fromTheMovieDBToMovie(movie);
    //});

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load top rated movies";
  }
};
