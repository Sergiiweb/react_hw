import {apiService} from "./apiService";
import {urls} from "../constants";

const moviesService = {
    getAll: () => apiService.get(urls.movies),
    getById: (id) => apiService.get(urls.movie.byId(id))
}

export {
    moviesService
}