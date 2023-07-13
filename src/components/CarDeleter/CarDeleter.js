import {useRef} from "react";

import styles from './CarDeleter.module.css';

const CarDeleter = () => {

    const idRef = useRef('');
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${idRef.current.value}`, {
            method: 'DELETE',
        });
            // .then((response) => response.json());
            // .then((json) => console.log(json));
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.formTitle}>Delete Car:</div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <label>Enter car Id to delete:
                    <br/>
                    <input type="number" ref={idRef} placeholder={'car id'}/>
                </label>
                <input type="submit" value={'delete'} className={styles.submitB}/>
            </form>

        </div>
    )
}

export {CarDeleter}