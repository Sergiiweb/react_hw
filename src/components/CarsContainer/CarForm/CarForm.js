import {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {createCarsThunk} from "../../../redux";
import {updateCarThunk} from "../../../redux";

const CarForm = () => {
    const [errors, setErrors] = useState(null);
    const carForUpdate = useSelector(state => state.cars.carForUpdate);
    const dispatch = useDispatch();

    const {
        reset,
        register,
        handleSubmit,
        setValue
    } = useForm();

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate, setValue])

    const save = (car) => {
        try {
            dispatch(createCarsThunk(car));
            setErrors(null);
            reset();
        } catch (e) {
            setErrors(e.response.data);
        }
    }

    const update = (car) => {
        try {
            dispatch(updateCarThunk(carForUpdate.id, car))
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