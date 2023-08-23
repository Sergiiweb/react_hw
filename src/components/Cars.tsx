import {FC, PropsWithChildren, useEffect} from "react";

import {Car} from "./Car";
import {useAppDispatch, useAppSelector} from "../hooks";
import {carsActions} from "../redux";

interface IProps extends PropsWithChildren {
}

const Cars: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {cars} = useAppSelector(state => state.cars);

    useEffect(() => {
        dispatch(carsActions.getAll);
    }, [dispatch]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};