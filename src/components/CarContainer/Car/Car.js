import styles from './Cars.module.css'
import {CarServices} from "../../../services/apiServices";

const Car = ({car, setOnDelete, setCarForUpdate}) => {
    const {id, brand, price, year} = car;

    const deleteCar = () => {
        CarServices.deleteCar(setOnDelete, id);
    };

    return (
        <div className={styles.carWrap}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>UpdateCar</button>
            <button onClick={deleteCar}>DeleteCar</button>
        </div>
    );
};

export {Car};