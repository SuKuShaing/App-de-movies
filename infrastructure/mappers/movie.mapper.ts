/**
 * se crea un mapper para mapear los datos, es decir, transformar los datos de la api a un formato que yo determine 
 * para que se pueda usar en la aplicación
*/ 

import { Movie } from "../interfaces/movie.intreface"
import { Result } from "../interfaces/moviedb-response"

export class MovieMapper {
    static fromTheMovieDBToMovie = (movie: Result): Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average,
        }
    }
}