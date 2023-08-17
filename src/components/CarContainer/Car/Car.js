import {useDispatch} from "react-redux";

import {carActions} from "../../../redux";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    return (
        <div style={{margin: 10, border: '1px solid black', borderRadius: 5}}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={() => dispatch(carActions.deleteCar({id}))}>delete</button>
        </div>
    );
};

export {Car};