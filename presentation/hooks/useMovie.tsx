import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id: number) => {
	const movieQuery = useQuery({               // Para manejar una solicitud
        queryKey: ['movie', id],                // key para identificar la query
        queryFn: () => getMovieByIdAction(id),  // función que se ejecuta para obtener los datos
        staleTime: 1000 * 60 * 60 * 24,         // mantiene la data por 24 hours
    });
    
    return {
        movieQuery
    };
};