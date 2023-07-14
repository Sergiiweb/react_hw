import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";
import {useState} from "react";
import styles from './CarContainer.module.css';

const CarContainer = () => {
    const [onSave,setOnSave] = useState(null);
    const [isShowUpdate, setIsShowUpdate] = useState(false);
    const [dataForUpd, setDataForUpd] = useState({id:'',brand:'',price:'',year:''});

    return (
        <div className={styles.container}>

            <Cars onSave={onSave} setIsShowUpdate={setIsShowUpdate} setDataForUpd={setDataForUpd}/>
            <CarForm setOnSave={setOnSave} isShowUpdate={isShowUpdate} dataForUpd={dataForUpd}/>
        </div>
    );
};

export {
    CarContainer
};