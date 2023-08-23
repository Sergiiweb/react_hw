import {Dispatch, FC, PropsWithChildren, SetStateAction} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces";
import {carService} from "../services";

interface IProps extends PropsWithChildren {
    setTrigger: Dispatch<SetStateAction<boolean>>;
    setCarForUpdate: Dispatch<SetStateAction<ICar>>;
    carForUpdate: ICar
}

const CarForm: FC<IProps> = ({setTrigger, setCarForUpdate, carForUpdate}) => {
    const {register, reset, setValue, handleSubmit} = useForm<ICar>();

    if (carForUpdate) {
        setValue('brand', carForUpdate.brand)
        setValue('price', carForUpdate.price)
        setValue('year', carForUpdate.year)
    }

    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car);
        setTrigger(prevState => !prevState);
        reset();
    };

    const update: SubmitHandler<ICar> = async (car) => {
        await carService.updateById(carForUpdate.id, car);
        setCarForUpdate(null);
        setTrigger(prevState => !prevState);
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