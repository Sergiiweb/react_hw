import {carService} from "../../services";
import {carsActions} from "../actions";

const updateCarThunk = (id, car) => (dispatch) => {
    carService.updateById(id, car)
        .then(({data}) => dispatch(carsActions.update(data)));
}

export {
    updateCarThunk
}