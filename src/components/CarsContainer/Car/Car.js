import css from './Car.module.css';
import {useDispatch} from "react-redux";
import {carsActions} from "../../../redux";
import {carService} from "../../../services";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    const deleteCar = (id) => {
        try {
            carService.deleteById(id);
            dispatch(carsActions.delete(id));
        } catch (e) {
            console.log(e.response.data);
        }
    }

    return (
        <div className={css.Car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <div className={css.ButtonsWrap}>
                <button onClick={()=>dispatch(carsActions.setCarForUpdate(car))}>update</button>
                <button onClick={()=>deleteCar(id)}>delete</button>
            </div>
        </div>
    );
};

export {Car};