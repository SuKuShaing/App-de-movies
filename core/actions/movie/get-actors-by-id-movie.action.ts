import { movieApi } from "@/core/api/movie-api";
import { ActorsDBResponseInterface } from "@/infrastructure/interfaces/actorsdb-response";
import { CastActor } from "@/infrastructure/interfaces/castActor.interface";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getActorsByIdMovieAction = async (
	id: number | string
): Promise<CastActor[]> => {
	try {
		const { data } = await movieApi.get<ActorsDBResponseInterface>(`/${id}/credits`);

		return MovieMapper.fromActorsDBToCast(data);
	} catch (error) {
		console.log(error);
		throw "Can not get movie by id";
	}
};
