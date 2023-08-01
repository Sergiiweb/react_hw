import axios from "axios";

import {baseURL, baseUrlCars} from "../constants";

const apiService = axios.create({baseURL});
const apiCarsService = axios.create({baseURL: baseUrlCars});

export {
    apiService,
    apiCarsService
}