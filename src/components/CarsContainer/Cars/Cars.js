import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Car} from "../Car/Car";
import css from './Cars.module.css';
import {getCarsThunk} from "../../../redux";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars);

    const getCars = () => dispatch(getCarsThunk());

    useEffect(() => {
        getCars();
    }, [])

    return (
        <div className={css.Cars}>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};