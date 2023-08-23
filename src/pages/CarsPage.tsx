import {CarForm, Cars} from "../components";
import {useEffect, useState} from "react";
import {ICar} from "../interfaces";
import {carService} from "../services";
import {Outlet} from "react-router-dom";

const CarsPage = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [trigger, setTrigger] = useState<boolean>(null);
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, [trigger]);

    return (
        <div>
            <Outlet/>
            <hr/>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>
        </div>
    );
};

export {CarsPage};