import {useSelector} from "react-redux";

import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";

const CarContainer = () => {
    const {isLoading, errors} = useSelector(state => state.cars);

    return (
        <div>
            <CarForm/>
            <hr/>
            {isLoading && <h1 style={{textAlign:'center'}}>Loading............</h1>}
            {errors && <h1 style={{textAlign:'center'}}>{JSON.stringify(errors)}</h1>}
            <Cars/>
        </div>
    );
};

export {CarContainer};