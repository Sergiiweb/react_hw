import {apiService} from "./apiService";
import {urls} from "../constants";

const charactersService = {
    getAll: (page) => apiService.get(urls.characters, {params: {page}}),
    getByIds: (iDs) => apiService.get(urls.charactersByIds.byIds(iDs))
}

export {
    charactersService
}
