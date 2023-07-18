import styles from './Cars.module.css'

const Car = ({car, setOnDelete}) => {
    const {id, brand, price, year} = car;

    function deleteCar(id) {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
            method: 'DELETE'
        }).then(() => {
            setOnDelete(prev => !prev);
        })
    }

    return (
        <div className={styles.carWrap}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => {
            }}>
                {/*{isShowUpdate ? 'Hide Fields for Update' : 'Show Fields for Update'}*/}
                {"UpdateCar ->"}
            </button>
            <button onClick={() => deleteCar(id)}>DeleteCar</button>
            {/*{isShowUpdate && <CarUpdateForm id={id} brand={brand} price={price} year={year} setOnUpdate={setOnUpdate}*/}
            {/*                                setIsShowUpdate={setIsShowUpdate}/>}*/}
        </div>
    );
};

export {Car};