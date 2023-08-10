import {carService} from "../../services";
import {carsActions} from "../actions";

const createCarsThunk = (car) => (dispatch) => {
    carService.create(car)
        .then(({data}) => dispatch(carsActions.create(data)));
}

export {
    createCarsThunk
}