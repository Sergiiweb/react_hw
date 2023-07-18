import React from 'react';
import {useForm} from "react-hook-form";
import Joi from "joi";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";
import styles from './CarForm.module.css';

const CarForm = ({setOnSave}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid},
        setValue

    } = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    });


    const saveCar = (data) => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            headers: {'content-type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(data)
        }).then(value => {
            if (!value.ok) {
                throw Error(value.status + ' not ok')
            }
            return value.json();
        })
            .then(value => {
                setOnSave(prev => !prev);
                reset();
            })
            .catch(e => console.log(e))
    }


    return (
        <div className={styles.wrap}>
            <h2>Create Car</h2>
            <form className={styles.form} onSubmit={handleSubmit(saveCar)}>
                <label><input type="text" placeholder={'brand'} {...register('brand', {
                    required: true
                })}/></label>
                {errors.brand && <span>{errors.brand.message}</span>}
                <label><input type="text" placeholder={'price'} {...register('price', {
                    valueAsNumber: true,
                    // required: true,
                    // min: {value:0, message:'price must be gte 0'},
                    // max: {value:1000000, message:'price must be lte 1000000'}
                })}/></label>
                {errors.price && <span>{errors.price.message}</span>}
                <label><input type="text" placeholder={'year'} {...register('year', {
                    valueAsNumber: true,
                    // required: true,
                    // min: {value:1990, message:'year gte 1990'},
                    // max: {value:new Date().getFullYear(), message:`year lte ${new Date().getFullYear()}`}
                })}/></label>
                {errors.year && <span>{errors.year.message}</span>}
                <button disabled={!isValid}>SaveCar</button>
            </form>

        </div>
    );
};

export {CarForm};