import { router } from "expo-router";
import { Image, Pressable, View } from "react-native";

// NO implementen clases, componentes, objetos
// que requieran dependencias que no necesitan
interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}

const MoviePoster = ({ id, poster, smallPoster, className }: Props) => {
  return (
    <View className={`flex-1 items-center justify-center ${className}`}>
      <Pressable
        className="active:opacity-90 px-2"
        onPress={() => router.push(`/movie/${id}`)}
      >
        <Image
          source={{ uri: poster }}
          className="shadow-lg rounded-2xl"
          style={{
            width: smallPoster ? 85 : 150,
            height: smallPoster ? 130 : 250,
          }}
          resizeMode="cover"
        />
      </Pressable>
    </View>
  );
};

export default MoviePoster;
