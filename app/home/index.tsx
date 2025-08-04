import MainSlideShow from "@/presentation/components/movies/MainSlideShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
	const safeArea = useSafeAreaInsets(); // hook para obtener el safe area de la pantalla para no intervertir el contenido de la pantalla
	const { nowPlayingQuery, popularQuery } = useMovies();

	// color: visible en Android e iOS, size: solo para Android

	if (nowPlayingQuery.isLoading) {
		return (
			<View className="justify-center items-center flex-1">
				<ActivityIndicator color="purple" size={50} />
			</View>
		);
	}

	return (
		<View style={{ paddingTop: safeArea.top }} className="mt-2">
			<Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>

			{/* Carrusel de poster de películas */}
			<MainSlideShow movies={nowPlayingQuery.data ?? []} />

			{/* Películas populares */}
			<MovieHorizontalList movies={popularQuery.data ?? []} title="Populares" />

		</View>
	);

	// <View className="justify-center items-center flex-1">
	// 	<Text>{JSON.stringify(nowPlayingQuery.data)}</Text>
	// </View>
};

export default HomeScreen;
