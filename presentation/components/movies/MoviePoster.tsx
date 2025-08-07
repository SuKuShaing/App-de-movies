import { router } from "expo-router";
import { Image, Pressable } from "react-native";

interface Props {
	id: number;
	poster: string;
	smallPoster?: boolean;
	className?: string;
}

const MoviePoster = ({ id, poster, smallPoster = false, className }: Props) => {
	return (
		<Pressable
			className={`active:opacity-85 px-2 ${className}`}
			onPress={() => {
				console.log("id de la película:", { id });
				router.push(`/movie/${id}`);
			}}
		>
			<Image
				source={{ uri: poster }}
				className="shadow-lg rounded-2xl w-full h-full"
				style={{
					width: smallPoster ? 85 : 150,
					height: smallPoster ? 130 : 250,
				}}
				resizeMode="cover"
			/>
		</Pressable>
	);
};

export default MoviePoster;
