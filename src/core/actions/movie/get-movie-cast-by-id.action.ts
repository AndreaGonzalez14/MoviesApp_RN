import { movieApi } from "@/core/api/movie-api";
import { MovieDBCreditsResponse } from "@/infraestructure/interfaces/moviedb-credits.response";
import { CastMapper } from "@/infraestructure/mappers/cast.mapper";

export const getMovieCastAction = async (id: number | string) => {
  try {
    const { data } = await movieApi.get<MovieDBCreditsResponse>(
      `/${id}/credits`,
      {
        params: {
          language: "en-MX",
        },
      },
    );
    const cast = data.cast.map(CastMapper.fromMovieDBCastToEntity);

    return cast;
  } catch (error) {
    console.log(error);
    throw "Cannot load movie detail";
  }
};
