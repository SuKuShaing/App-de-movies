import { useMovie } from "@/presentation/hooks/useMovie";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

interface Props {
	idMovie: number;
}

const Reparto = ({ idMovie }: Props) => {
	const { castQuery } = useMovie(idMovie);

	if (castQuery.isLoading) {
		return <ActivityIndicator color="purple" size={30} />;
	}

	if (!castQuery.data) {
		return <Text>No hay datos</Text>;
	}

	return (
		<FlatList
			horizontal
			data={castQuery.data}
			keyExtractor={(actor, index) => `${actor.id}-${index}`}
			renderItem={({ item }) => (
				<View className="mx-8 w-[60px]" key={`${item.id}-${item.name}`}>
					<Image
						source={{ uri: item.avatar }}
						className="w-[100px] h-[150] rounded-2xl shadow"
						resizeMode="cover"
					/>

					<View>
						<Text
							numberOfLines={2}
							adjustsFontSizeToFit
							className="font-bold text-lg"
						>
							{item.name}
						</Text>
						<Text className="text-gray-600 text-xs">{item.character}</Text>
					</View>
				</View>
			)}
			showsHorizontalScrollIndicator={false}
		/>
	);
};

export default Reparto;
