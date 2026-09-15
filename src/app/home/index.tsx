import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, upcomingQuery, topRatedQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">MoviesApp</Text>

        {/* Carusel de imágenes */}
        <MainSlideshow movies={nowPlayingQuery.data ?? []} />

        {/* Popular */}
        <MovieHorizontalList
          movies={popularQuery.data ?? []}
          title="Populares"
          className="mb-5"
        />

        {/* Top Rated */}
        <MovieHorizontalList
          movies={topRatedQuery.data?.pages.flat() ?? []}
          title="Más Populares"
          className="mb-5"
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        {/* Upcoming */}
        <MovieHorizontalList
          movies={upcomingQuery.data ?? []}
          title="Próximamente"
          className="mb-5"
        />

        {/* Upcoming */}
        <MovieHorizontalList
          movies={upcomingQuery.data ?? []}
          title="Próximamente"
          className="mb-5"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
