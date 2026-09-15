import { nowPlayingAction } from "@/core/actions/movie/now-playing.actions";
import { popularMoviesAction } from "@/core/actions/movie/popular.actions";
import { topRatedMoviesAction } from "@/core/actions/movie/top-rated.actions";
import { upcomingMoviesAction } from "@/core/actions/movie/upcoming.actions";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  // queryKey es como se identifica la respuesta

  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, // mantiene fresca la data, por 24 horas
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // mantiene fresca la data, por 24 horas
  });

  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: upcomingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // mantiene fresca la data, por 24 horas
  });

  // Infinite Scroll
  const topRatedQuery = useInfiniteQuery({
    queryKey: ["movies", "topRated"],
    queryFn: ({ pageParam }) => {
      console.log(`page: ${pageParam}`);
      return topRatedMoviesAction({ page: pageParam });
    },
    initialPageParam: 1,
    staleTime: 1000 * 60 * 60 * 24, // mantiene fresca la data, por 24 horas
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  return {
    nowPlayingQuery,
    popularQuery,
    upcomingQuery,
    topRatedQuery,
  };
};
