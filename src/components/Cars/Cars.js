import React, {useEffect, useState} from 'react';
import Car from "./Car/Car";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [rerender, setRerender] = useState('');

    useEffect(() => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(value => value.json())
            .then(value => setCars(value))
    }, [rerender])

    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
            method: 'DELETE',
        });
        setRerender(id);
    }


    return (
        <div className={'wrap'}>
            {cars.map((car) => <Car key={car.id} car={car} handleDelete={handleDelete} setRerender={setRerender}/>)}
        </div>
    );
};

export default Cars;