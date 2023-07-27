const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const movie = '/movie';
const genres = '/genre/movie/list';

const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzUzYjRhMDc2NTk2OWNiMThjMzMxMzEwZTUzY2FiZSIsInN1YiI6IjY0YzEzZDkyODcxYjM0MDEwMTA3MmJhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pxs_OoKGpwNuwChDSMisHi1SI8MgWsvVwnQZ5NW-UEg'

};

const urls = {
    movies,
    genres,
    movie: {
        byId: (id) => `${movie}/${id}`
    }
}

export {
    baseURL,
    urls,
    headers
}