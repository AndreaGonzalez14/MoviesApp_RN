import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponseMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const nowPlayingAction = async () => {
  try {
    const { data } =
      await movieApi.get<MovieDBResponseMoviesResponse>("/now_playing");
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    //console.log(movies);
    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
