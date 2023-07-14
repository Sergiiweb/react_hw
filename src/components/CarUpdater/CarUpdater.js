import {useEffect, useRef} from "react";

import styles from './CarUpdater.module.css';

const CarUpdater = ({id, setRerender}) => {

    const brandRef = useRef('');
    const priceRef = useRef('');
    const yearRef = useRef('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(brandRef.current.value, priceRef.current.value, yearRef.current.value);
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
            method: 'PATCH',
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
        setTimeout(()=>setRerender(brandRef.current.value), 500);

    }

    useEffect(()=>{

    },[brandRef, priceRef, yearRef])

    return (
        <div className={styles.wrap}>
            <div className={styles.formTitle}>Update Car:</div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <label>Brand:
                    <br/>
                    <input type="text" ref={brandRef} placeholder={'brand'}/>
                </label>
                <label>Price:
                    <br/>
                    <input type="text" ref={priceRef} placeholder={'price'}/>
                </label>
                <label>Year:
                    <br/>
                    <input type="text" ref={yearRef} placeholder={'year'}/>
                </label>
                <input type="submit" value={'update'} className={styles.submitB}/>
            </form>

        </div>
    )
}

export {CarUpdater}