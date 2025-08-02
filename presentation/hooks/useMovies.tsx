import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
	// Queries
	const nowPlayingQuery = useQuery({
		queryKey: ["movies", "now-playing"],    // key para identificar la query
		queryFn: nowPlayingAction,              // función que se ejecuta para obtener los datos
		staleTime: 1000 * 60 * 60 * 24,         // mantiene la data por 24 hours
	});

	return {
		nowPlayingQuery,
	};
};
