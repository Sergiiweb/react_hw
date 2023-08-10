import {carService} from "../../services";
import {carsActions} from "../actions";

const getCarsThunk = () => (dispatch) => {
    carService.getAll()
        .then(({data}) => dispatch(carsActions.set(data)))
}

export {
    getCarsThunk
}