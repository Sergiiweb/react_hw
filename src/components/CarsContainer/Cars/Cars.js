import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carService} from "../../../services";
import {carsActions} from "../../../redux";
import {Car} from "../Car/Car";
import css from './Cars.module.css';

const Cars = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars);

    useEffect(()=>{
        carService.getAll()
            .then(({data})=> dispatch(carsActions.set(data)))
    },[dispatch])

    return (
        <div className={css.Cars}>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};