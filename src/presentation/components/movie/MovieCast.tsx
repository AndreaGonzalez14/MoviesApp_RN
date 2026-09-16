import { Cast } from "@/infraestructure/interfaces/cast.interface";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ActorCard from "./ActorCard";

interface Props {
  cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
  return (
    <View className="mt-5 mb-20">
      <Text className="px-5 font-bold text-2xl">Actores</Text>
      <FlatList
        horizontal
        data={cast}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};

export default MovieCast;
