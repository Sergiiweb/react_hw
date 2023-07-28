import {apiService} from "./apiService";
import {urls} from "../constants";

const moviesService = {
    getAll: (page) => apiService.get(urls.movies.byPage(page)),
    getById: (id) => apiService.get(urls.movie.byId(id))
}

export {
    moviesService
}