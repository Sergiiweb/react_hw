import {useEffect, useState} from "react";
import {Car} from "../Car/Car";
import styles from '../Car/Cars.module.css';
import {CarServices} from "../../../services/apiServices";

const Cars = ({onSave, setCarForUpdate}) => {
    const [cars, setCars] = useState([]);
    const [onDelete, setOnDelete] = useState(false);

    useEffect(() => {
        CarServices.getCars(setCars);
    }, [onSave, onDelete])

    return (
        <div className={styles.carsWrap}>
            {cars.map(car => <Car
                key={car.id}
                car={car}
                setOnDelete={setOnDelete}
                setCarForUpdate={setCarForUpdate}
            />)}
        </div>
    );
};

export {Cars};