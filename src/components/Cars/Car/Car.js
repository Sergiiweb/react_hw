import React, {useEffect, useState} from 'react';
import styles from './Car.module.css'
import {CarUpdater} from "../../CarUpdater/CarUpdater";

const Car = ({car, handleDelete, setRerender}) => {
    const {id, brand, price, year} = car;
    const [isShowUpd, setIsShowUpd] = useState(false);



    return (
        <div className={styles.carContainer}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <div className={styles.buttonsDiv}>
                <button onClick={()=>setIsShowUpd(!isShowUpd)}>{isShowUpd ? 'hide update dtls' : 'show dtls to update'}</button>
                <button onClick={()=>handleDelete(id)}>delete</button>
            </div>
            {isShowUpd && <CarUpdater id={id} setRerender={setRerender}/>}
        </div>
    );
};

export default Car;