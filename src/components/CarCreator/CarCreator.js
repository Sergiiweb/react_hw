import {useRef} from "react";

import styles from './CarCreator.module.css';

const CarCreator = () => {

    const brandRef = useRef('');
    const priceRef = useRef('');
    const yearRef = useRef('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(brandRef.current.value, priceRef.current.value, yearRef.current.value);
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            method: 'POST',
            body: JSON.stringify({
                brand: brandRef.current.value,
                price: priceRef.current.value,
                year: yearRef.current.value,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.formTitle}>Create New Car:</div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <label>Brand:
                    <br/>
                    <input type="text" ref={brandRef} placeholder={'brand'}/>
                </label>
                <label>Price:
                    <br/>
                    <input type="text" ref={priceRef} min={0} max={1000000} placeholder={'price'}/>
                </label>
                <label>Year:
                    <br/>
                    <input type="text" ref={yearRef} min={1990} max={2023} placeholder={'year'}/>
                </label>
                <input type="submit" value={'create'} className={styles.submitB}/>
            </form>

        </div>
    )
}

export {CarCreator}