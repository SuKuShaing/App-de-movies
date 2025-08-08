import { Formatter } from "@/config/helpers/formatte";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.intreface";
import { Text, View } from "react-native";
import Reparto from "./Reparto";

interface Props {
    movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
	return (
		<View className="">
            <View className="flex flex-row mx-5">
                <Text>{movie.rating}</Text>
                <Text> - {movie.genres.join(", ")}</Text>
            </View>

            <Text className="font-bold mt-5 mx-5">Historia</Text>
            <Text className="font-normal mt-2 mx-5">{movie.description}</Text>
        
            <Text className="font-bold mt-2 text-2xl mx-5">{Formatter.currency(movie.budget)}</Text>

            <Text className="font-bold mt-5 mx-5">Reparto</Text>
            <Reparto idMovie={movie.id} />

		</View>
	);
};

export default MovieDescription;
