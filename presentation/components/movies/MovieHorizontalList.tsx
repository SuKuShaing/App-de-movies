import { Movie } from "@/infrastructure/interfaces/movie.intreface";
import { FlatList, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
    title?: string;
    movies: Movie[]
}

const MovieHorizontalList = ({ movies, title }: Props) => {
	return (
		<View className="mb-5">
            {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}

			<FlatList
				horizontal
				data={movies}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
                showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default MovieHorizontalList;
{/* showsHorizontalScrollIndicator: false, para que no se muestre el scroll horizontal */}
