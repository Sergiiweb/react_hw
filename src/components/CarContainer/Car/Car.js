import styles from './Cars.module.css'
import {useState} from "react";
import {CarUpdateForm} from "../CarUpdateForm/CarUpdateForm";

const Car = ({car,setOnUpdate, setOnDelete}) => {
    const {id, brand, price, year} = car;
    const [isShowUpdate, setIsShowUpdate] = useState(false);

    function deleteCar(id) {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
            method: 'DELETE'
        }).then(()=>{
            setOnDelete(prev=>!prev);
        })
    }

    return (
        <div className={styles.carWrap}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button
                onClick={() => setIsShowUpdate(!isShowUpdate)}>{isShowUpdate ? 'Hide Fields for Update':'Show Fields for Update'}</button>
            <button onClick={()=>deleteCar(id)}>DeleteCar</button>
            {isShowUpdate && <CarUpdateForm id={id} brand={brand} price={price} year={year} setOnUpdate={setOnUpdate}/>}
        </div>
    );
};

export {Car};