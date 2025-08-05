import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { PopularMoviesAction } from "@/core/actions/movies/popular.action";
import { TopRatedMoviesAction } from "@/core/actions/movies/top-rated.action";
import { UpcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";


/**
 * Hook para obtener las películas de la api de The Movie DB
 * aquí se usa Tanstack Query para manejar las consultas(queries) a la api
 * maneja el cache de las queries, el error, el loading, etc.
 * @returns {Object} - Objeto con las queries de las películas
 */
export const useMovies = () => {
	// Queries
	const nowPlayingQuery = useQuery({			// para manejar una solicitud
		queryKey: ["movies", "now-playing"],    // key para identificar la query
		queryFn: nowPlayingAction,              // función que se ejecuta para obtener los datos
		staleTime: 1000 * 60 * 60 * 24,         // mantiene la data por 24 hours
	});											// retorna un array de Movie[]

	const popularQuery = useQuery({
		queryKey: ["movies", "popular"],
		queryFn: PopularMoviesAction,
		staleTime: 1000 * 60 * 60 * 24,
	});
	
	const topRatedQuery = useInfiniteQuery({	// para manejar scroll infinito, puesto que tiene paginación
		initialPageParam: 1,					// para empezar en la página 1, lo solicita useInfiniteQuery
		queryKey: ["movies", "top-rated"],
		queryFn: ({pageParam}) => {								// para manejar la paginación, se usa pageParam, que es el número de página que se está cargando, que la primera es initialPageParam
			console.log({pageParam}); 							// para ver el número de página que se está cargando
			return TopRatedMoviesAction({ page: pageParam});	// Hace la petición
		},
		getNextPageParam: (lastPage, pages) => pages.length + 1,	// para obtener la siguiente página, lastPage es la última página solicitada, pages es el array de páginas solicitadas Movie[][]
		staleTime: 1000 * 60 * 60 * 24,
	});													// retorna dentro de data un objeto con pageParams y pages, que es un array de Movie[], es decir un movie[][]

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
