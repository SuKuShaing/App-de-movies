import { Movie } from "@/infrastructure/interfaces/movie.intreface";
import { useRef } from "react";
import { useWindowDimensions, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviePoster from "./MoviePoster";

interface Props {
	movies: Movie[];
}

// const width = Dimensions.get("window").width; // este no se actualiza cuando se rota la pantalla

const MainSlideShow = ({ movies }: Props) => {
	const ref = useRef<ICarouselInstance>(null);
    const widthWindow = useWindowDimensions().width;

	return (
		<View className="h-[250px] w-full">
			<Carousel
				ref={ref}
				data={movies}
				renderItem={({ item }) => (
                    <MoviePoster id={item.id} poster={item.poster} />
				)}
                width={200}
                height={350}
                style={{
                    width: widthWindow,
                    height: 350,
                    justifyContent: "center",
                    alignItems: "center",
                }}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                defaultIndex={1}
			/>
		</View>
	);
};

export default MainSlideShow;
/* 
<Carousel
    ref={ref} // ref para poder acceder al carousel
    width={150 + 50} // ancho de la tarjeta y la separacion entre tarjetas
    height={350} // altura del carousel
    data={movies} // datos que se van a mostrar en el carousel
    // onProgressChange={progress} // función para actualizar el progreso del carousel
    renderItem={({ item }) => (
        <Text>{item.title}</Text> // renderiza cada item del carousel
    )}
    style={{
        width: widthWindow, // ancho del carousel
        height: 350, // altura del carousel
        justifyContent: "center", // centro el contenido del carousel
        alignItems: "center", // centro el contenido del carousel
    }}
    mode="parallax" // modo de desplazamiento del carousel
    modeConfig={{
        parallaxScrollingScale: 0.9, // escala del contenido del carousel
        parallaxScrollingOffset: 50, // offset del contenido del carousel
    }}
    defaultIndex={1} // indice inicial del carousel
/>

<Pagination.Basic
    progress={progress}
    data={data}
    dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
    containerStyle={{ gap: 5, marginTop: 10 }}
    onPress={onPressPagination}
/> */
