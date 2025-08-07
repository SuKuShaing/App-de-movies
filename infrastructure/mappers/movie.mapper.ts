/**
 * se crea un mapper para mapear los datos, es decir, transformar los datos de la api a un formato que yo determine 
 * para que se pueda usar en la aplicación
*/ 

import { CompleteMovie, Movie } from "../interfaces/movie.intreface"
import { MovieBDMovieResponse } from "../interfaces/moviedb-movie.response"
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

    static fromTheMovieDBToCompleteMovie = (movie: MovieBDMovieResponse): CompleteMovie => {
        // const movieDBMovie = MovieMapper.fromTheMovieDBToMovie(movie as unknown as Result);
        
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average,
            // ...movieDBMovie,
            budget: movie.budget,
            duration: movie.runtime,
            genres: movie.genres.map(genre => genre.name),
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map(company => company.name),
        }
    }
}