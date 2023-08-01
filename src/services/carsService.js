import {apiCarsService} from "./apiService";
import {urls} from "../constants";

const carsService = {
    getAll: ()=> apiCarsService.get(urls.cars)
}

export {
    carsService
}