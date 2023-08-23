import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import {ICar} from "../interfaces";
import {useAppDispatch} from "../hooks";
import {carsActions} from "../redux";

interface IProps extends PropsWithChildren {
    car: ICar;
}

const Car: FC<IProps> = ({car}) => {
    const {id, brand} = car;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const deleteCar = async () => {
        await dispatch(carsActions.deleteCar({id}));
    };

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <button onClick={() => dispatch(carsActions.setCarForUpdate({car}))}>update</button>
            <button onClick={deleteCar}>delete</button>
            <button onClick={() => navigate(id.toString(), {state: car})}>details</button>
        </div>
    );
};

export {Car};