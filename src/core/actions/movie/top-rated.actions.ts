import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponseMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

interface Options {
  // determinar como funciona
  page?: number;
  limit?: number;
}

export const topRatedMoviesAction = async ({
  page = 1,
  limit = 10,
}: Options) => {
  try {
    const { data } = await movieApi.get<MovieDBResponseMoviesResponse>(
      "/top_rated",
      {
        params: {
          page: page,
        },
      },
    );
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
