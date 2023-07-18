import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";
import {useState} from "react";
import styles from './CarContainer.module.css';

const CarContainer = () => {
    const [onSave,setOnSave] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <div className={styles.container}>

            <Cars onSave={onSave} setCarForUpdate={setCarForUpdate}/>
            <CarForm setOnSave={setOnSave} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {
    CarContainer
};