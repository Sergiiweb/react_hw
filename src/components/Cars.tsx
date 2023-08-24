import {FC, PropsWithChildren, useEffect} from "react";

import {Car} from "./Car";
import {useAppDispatch, useAppSelector} from "../hooks";
import {carsActions} from "../redux";
import {useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {
}

const Cars: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {cars} = useAppSelector(state => state.cars);
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = +query.get('page');

    useEffect(() => {
        dispatch(carsActions.getAll({page}));
    }, [dispatch, page]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};