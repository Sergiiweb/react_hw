import {Outlet} from "react-router-dom";

import {CarForm, Cars} from "../components";

const CarsPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};