import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
	page?: number;
	limit?: number;
}

export const TopRatedMoviesAction = async ({
	page = 1,
	limit = 10,
}: Options) => {
	try {
		const { data } = await movieApi.get<MovieDBMoviesResponse>("/top_rated", {
			params: {
				page,
			},
		});
		// console.log(JSON.stringify(data, null, 2));

		const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

		// console.log(movies);

		return movies;
	} catch (error) {
		console.log(error);
		throw "Can not get top rated movies";
	}
};
