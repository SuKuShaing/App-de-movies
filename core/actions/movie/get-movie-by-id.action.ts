import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.intreface";
import { MovieBDMovieResponse } from "@/infrastructure/interfaces/moviedb-movie.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieByIdAction = async (
	id: number | string
): Promise<CompleteMovie> => {
	try {
		const { data } = await movieApi.get<MovieBDMovieResponse>(`/${id}`);

		console.log('Película obtenida: ', data.title);

		return MovieMapper.fromTheMovieDBToCompleteMovie(data);
	} catch (error) {
		console.log(error);
		throw "Can not get movie by id";
	}
};
