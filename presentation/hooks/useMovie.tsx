import { getActorsByIdMovieAction } from "@/core/actions/movie/get-actors-by-id-movie.action";
import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id: number) => {
	const movieQuery = useQuery({               // Para manejar una solicitud
        queryKey: ['movie', id],                // key para identificar la query
        queryFn: () => getMovieByIdAction(id),  // función que se ejecuta para obtener los datos
        staleTime: 1000 * 60 * 60 * 24,         // mantiene la data por 24 hours
    });
    
    const castQuery = useQuery({
        queryKey: ['cast', id],
        queryFn: () => getActorsByIdMovieAction(id),
        staleTime: 1000 * 60 * 60 * 24,
    });

    return {
        movieQuery,
        castQuery
    };
};