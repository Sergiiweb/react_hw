import {carService} from "../../services";
import {carsActions} from "../actions";

const deleteCarThunk = (id) => (dispatch) => {
    carService.deleteById(id);
    dispatch(carsActions.delete(id));
}

export {
    deleteCarThunk
};
