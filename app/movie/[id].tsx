import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const MovieScreen = () => {

    const { id } = useLocalSearchParams();  // Este Hook es para obtener los parámetros de la URL

    getMovieByIdAction(+id);

	return (
		<View>
			<Text>MovieScreen</Text>
		</View>
	);
};

export default MovieScreen