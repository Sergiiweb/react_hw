import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {useAppLocation} from "../hooks";
import {carService} from "../services";
import {ICar} from "../interfaces";
import {CarDetails} from "../components";

const CarDetailsPage = () => {
    const {state} = useAppLocation<ICar>();
    const {id} = useParams<{ id: string }>();

    const [car, setCar] = useState<ICar>(state);

    useEffect(() => {
        if (state) {
            setCar(state);
        } else {
            carService.getById(+id).then(({data}) => setCar(data));
        }
    }, [id, state]);

    return (
        <div>
            {car && <CarDetails car={car}/>}
        </div>
    );
};

export {CarDetailsPage};