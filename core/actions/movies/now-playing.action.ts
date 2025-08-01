import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";

export const nowPlayingAction = async () => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing');
        console.log(JSON.stringify(data, null, 2));

        return [];
    } catch (error) {
        console.log(error);
        throw 'Can not get now playing movies';
    }
}