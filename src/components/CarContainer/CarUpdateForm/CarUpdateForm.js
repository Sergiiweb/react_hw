import {useState} from "react";

const CarUpdateForm = ({id, brand, price, year, setOnUpdate, setIsShowUpdate}) => {
    const initialState = {
        brand: brand,
        price: price,
        year: year
    }
    const [car, setCar] = useState(initialState);

    const inputHandle = (e) => {
        setCar(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const updateCar = (e) => {
        e.preventDefault();
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(car),
            method: 'PATCH'
        }).then(value => value.json())
            .then(() => {
                setOnUpdate(prev => !prev);
                setIsShowUpdate(false);
            })
    }

    return (
        <div>
            <form onSubmit={updateCar}>
                <div><label>brand: <input type="text" value={car.brand} name={'brand'} onChange={inputHandle}
                                          placeholder={brand}/></label>
                </div>
                <div><label>price: <input type="text" value={car.price} name={'price'} onChange={inputHandle}
                                          placeholder={price}/></label>
                </div>
                <div><label>year: <input type="text" value={car.year} name={'year'} onChange={inputHandle}
                                         placeholder={year}/></label></div>
                <button>UpdateCar</button>
            </form>
        </div>
    );
};

export {CarUpdateForm};