import axios from "axios";

import {basePosterURL, headers, urls} from "../constants";

const apiPosterService = axios.create({
    baseURL : basePosterURL,
    headers
});

const posterService = {
    getPoster: (id)=>apiPosterService.get(urls.poster.byId(id))
}

export {
    posterService
}