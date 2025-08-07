import { useMovie } from "@/presentation/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

const MovieScreen = () => {
	const { id } = useLocalSearchParams(); // Este Hook es para obtener los parámetros de la URL

	const { movieQuery } = useMovie(+id); // Para obtener la película, se le envía el + para convertir el id a número

	if (movieQuery.isLoading) {
		return (
			<View className="flex-1 items-center justify-center">
				<Text className="mb-4 text-xl">Espere por favor, Cargando...</Text>
				<ActivityIndicator color="purple" size={30} />
			</View>
		);
	}

	return (
		<ScrollView>
			<Text className="m-10 text-2xl font-bold">{movieQuery.data?.title ?? 'Sin título'}</Text>
		</ScrollView>
	);
};

export default MovieScreen;
