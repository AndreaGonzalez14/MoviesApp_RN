import { getMovieCastAction } from "@/core/actions/movie/get-movie-cast-by-id.action";
import { useQuery } from "@tanstack/react-query";

export const useCast = (id: number) => {
  const castQuery = useQuery({
    queryKey: ["movie", id, "cast"],
    queryFn: () => getMovieCastAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { castQuery };
};
