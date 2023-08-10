import {useState} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../../services";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../../redux";
import {logDOM} from "@testing-library/react";

const CarForm = () => {
    const [errors, setErrors] = useState(null);
    let carForUpdate = useSelector(state => state.cars.carForUpdate);
    const dispatch = useDispatch();

    const {
        reset,
        register,
        handleSubmit,
        setValue
    } = useForm();
    // const { carForUpdate, setCarForUpdate} = useContext(Context);

    if (carForUpdate) {
        setValue('brand', carForUpdate.brand);
        setValue('price', carForUpdate.price);
        setValue('year', carForUpdate.year);
    }
    const save = (car) => {
        try {
            carService.create(car)
                .then(({data})=>dispatch(carsActions.create(data)));
            setErrors(null);
            reset();
        } catch (e) {
            setErrors(e.response.data);
        }
    }

    const update = (car) => {
        try {
            carService.updateById(carForUpdate.id, car)
                .then(({data})=>dispatch(carsActions.update(data)));
            setErrors(null);
            reset();
        } catch (e) {
            setErrors(e.response.data);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(!carForUpdate ? save : update)}>
                <label>brand: <input type="text" placeholder={'brand'} {...register('brand')}/></label>
                <label>price: <input type="text" placeholder={'price'} {...register('price')}/></label>
                <label>year: <input type="text" placeholder={'year'} {...register('year')}/></label>
                <button>{!carForUpdate ? 'save' : 'update'}</button>
            </form>
            {errors && JSON.stringify(errors)}
        </div>
    );
};

export {CarForm};