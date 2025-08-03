import MainSlideShow from "@/presentation/components/MainSlideShow";
import { useMovies } from "@/presentation/hooks/useMovies";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
	const safeArea = useSafeAreaInsets(); // hook para obtener el safe area de la pantalla para no intervertir el contenido de la pantalla
	const { nowPlayingQuery } = useMovies();

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
			<Text className="text-3xl font-bold px-4 mb-2">HomeScreen</Text>
			<MainSlideShow movies={nowPlayingQuery.data || []} />
		</View>
	);

	// <View className="justify-center items-center flex-1">
	// 	<Text>{JSON.stringify(nowPlayingQuery.data)}</Text>
	// </View>
};

export default HomeScreen;
