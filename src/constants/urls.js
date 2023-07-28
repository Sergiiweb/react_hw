const baseURL = 'https://api.themoviedb.org/3';
const basePosterURL = 'https://image.tmdb.org/t/p/w500';

const movies = '/discover/movie';
const movie = '/movie';
const genres = '/genre/movie/list';

const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzUzYjRhMDc2NTk2OWNiMThjMzMxMzEwZTUzY2FiZSIsInN1YiI6IjY0YzEzZDkyODcxYjM0MDEwMTA3MmJhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pxs_OoKGpwNuwChDSMisHi1SI8MgWsvVwnQZ5NW-UEg'

};

const urls = {
    movies: {
        byPage: (page) => `${movies}?page=${page}`,
        byGenre: (id) => `${movies}?with_genres=${id}`,
    },
    genres,
    movie: {
        byId: (id) => `${movie}/${id}`
    },
    poster: {
        byId: (id) => `/${id}`
    }
}

export {
    baseURL,
    urls,
    headers,
    basePosterURL
}