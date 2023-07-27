import axios from "axios";

import {baseURL, headers} from "../constants";

const apiService = axios.create({
    baseURL,
    headers
});

export {
    apiService
}