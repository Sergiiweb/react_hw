import {FC, PropsWithChildren} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks";
import {carsActions} from "../redux";
import {useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {
}

const CarForm: FC<IProps> = () => {
    const {carForUpdate} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();
    const [query] = useSearchParams({page: '1'});
    const page = +query.get('page');
    const {register, reset, setValue, handleSubmit} = useForm<ICar>();

    if (carForUpdate) {
        setValue('brand', carForUpdate.brand)
        setValue('price', carForUpdate.price)
        setValue('year', carForUpdate.year)
    }

    const save: SubmitHandler<ICar> = async (car) => {
        await dispatch(carsActions.create({car, page}));
        reset();
    };

    const update: SubmitHandler<ICar> = async (car) => {
        await dispatch(carsActions.update({id:carForUpdate.id, car, page}));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};