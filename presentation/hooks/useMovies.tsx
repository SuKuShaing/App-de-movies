import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { PopularMoviesAction } from "@/core/actions/movies/popular.action";
import { TopRatedMoviesAction } from "@/core/actions/movies/top-rated.action";
import { UpcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { useQuery } from "@tanstack/react-query";


/**
 * Hook para obtener las películas de la api de The Movie DB
 * aquí se usa Tanstack Query para manejar las consultas(queries) a la api
 * maneja el cache de las queries, el error, el loading, etc.
 * @returns {Object} - Objeto con las queries de las películas
 */
export const useMovies = () => {
	// Queries
	const nowPlayingQuery = useQuery({
		queryKey: ["movies", "now-playing"],    // key para identificar la query
		queryFn: nowPlayingAction,              // función que se ejecuta para obtener los datos
		staleTime: 1000 * 60 * 60 * 24,         // mantiene la data por 24 hours
	});

	const popularQuery = useQuery({
		queryKey: ["movies", "popular"],
		queryFn: PopularMoviesAction,
		staleTime: 1000 * 60 * 60 * 24,
	});
	
	const topRatedQuery = useQuery({
		queryKey: ["movies", "top-rated"],
		queryFn: TopRatedMoviesAction,
		staleTime: 1000 * 60 * 60 * 24,
	});

	const upcomingQuery = useQuery({
		queryKey: ["movies", "upcoming"],
		queryFn: UpcomingMoviesAction,
		staleTime: 1000 * 60 * 60 * 24,
	});

	return {
		nowPlayingQuery,
		popularQuery,
		topRatedQuery,
		upcomingQuery,
	};
};
