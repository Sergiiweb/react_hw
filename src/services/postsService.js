import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postsService = {
    getAll: () => apiService.get(urls.posts.base),
    getById: (postId) => apiService.get(urls.posts.byId(postId))
}

export {
    postsService
}