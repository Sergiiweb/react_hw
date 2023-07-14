import styles from './Cars.module.css'
const Car = ({car}) => {
    const {id, brand, price, year} = car;
    return (
        <div className={styles.carWrap}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
        </div>
    );
};

export {Car};