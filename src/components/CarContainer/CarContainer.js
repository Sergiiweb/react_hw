import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";
import {useState} from "react";
import styles from './CarContainer.module.css';

const CarContainer = () => {
    const [onSave,setOnSave] = useState(null);

    return (
        <div className={styles.container}>

            <Cars onSave={onSave} />
            <CarForm setOnSave={setOnSave} />
        </div>
    );
};

export {
    CarContainer
};