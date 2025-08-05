import { Movie } from "@/infrastructure/interfaces/movie.intreface";
import { useEffect, useRef } from "react";
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
    title?: string;
    movies: Movie[]
	className?: string;
	loadNextPage?: () => void;
}

const MovieHorizontalList = ({ movies, title, className, loadNextPage }: Props) => {

	const isLoading = useRef(false);

	useEffect(() => {
		setTimeout(() => {
			isLoading.current = false;
		}, 200);
	}, [movies]);

	const onScroll = (evento: NativeSyntheticEvent<NativeScrollEvent>) => {
		if (isLoading.current) return;  // si ya está cargando, no se hace nada

		const { contentOffset, layoutMeasurement, contentSize } = evento.nativeEvent;

		/*
		contentOffset.x: posición de avance en horizontal del scroll, origen en 0
		layoutMeasurement.width: ancho visible en pantalla de FlatList
		contentSize.width: ancho total de la lista, en horizontal
		*/

		const margenDeGracia = 600; // margen de gracia antes del final de la lista, para que se carguen más películas

		const isEndReached = (contentOffset.x + layoutMeasurement.width + margenDeGracia) >= contentSize.width; // verifica si se ha llegado cerca del final

		if (!isEndReached) return; // si no se ha llegado cerca del final, no se hace nada

		isLoading.current = true;

		console.log("cargando más películas");
		// TODO: cargar más películas
		loadNextPage && loadNextPage(); // si existe la función, se ejecuta
	}

	return (
		<View className={`mb-5 ${className}`}>
            {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}

			<FlatList
				horizontal
				data={movies}
				keyExtractor={(item, index) => `${item.id}-${index}`}
				renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
                showsHorizontalScrollIndicator={false}
				onScroll={onScroll}
				/>
		</View>
	);
};

export default MovieHorizontalList;

// keyExtractor={(item, index) => `${item.id}-${index}`} // en caso de que vengan dos películas con el mismo id, le concatena el index para que el keyExtractor no se repita; sí se repite, se cae la app
// showsHorizontalScrollIndicator: false, para que no se muestre el scroll horizontal
