import styles from './Cars.module.css'

const Car = ({car, setOnDelete, setCarForUpdate}) => {
    const {id, brand, price, year} = car;

    const deleteCar = () => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
            method: 'DELETE'
        }).then(() => {
            setOnDelete(prev => !prev);
        })
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