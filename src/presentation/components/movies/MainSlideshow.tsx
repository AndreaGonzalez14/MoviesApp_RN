import { Movie } from "@/infraestructure/interfaces/movie.interface";
import { useWindowDimensions, View } from "react-native";
import { Carousel } from "react-native-reanimated-carousel";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
}

const MainSlideshow = ({ movies }: Props) => {
  const width = useWindowDimensions().width; // el width cambia ya sea porque se puso en modo horizontal o es un teléfono plegable
  return (
    <View>
      <Carousel
        style={{
          width: width,
          height: 250,
          justifyContent: "center",
          alignItems: "center",
        }}
        itemSize={200}
        layout={{
          type: "parallax",
          scale: 0.9,
          offset: 60,
        }}
        loop={true}
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster poster={item.poster} id={item.id} />
        )}
        defaultIndex={1}
      />
    </View>
  );
};

export default MainSlideshow;
