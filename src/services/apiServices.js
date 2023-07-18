import {baseUrl, Endpoints} from "../api/endpoints";
import axios from "axios";

const instance = axios.create({
    baseURL: baseUrl,
    headers: {'Content-type': 'application/json'}
});
export const CarServices = {
    getCars: (setCars) => {
        instance.get()
            .then(value => setCars(value.data))
    },
    deleteCar: (setOnDelete, id) => {
        instance.delete(`${id}`, {
            method: 'DELETE'
        }).then(() => {
            setOnDelete(prev => !prev);
        })
    },
    saveCar: (data, setOnSave) => {
        const {brand, price, year} = data;
        instance.post('', {
            brand: brand,
            price: price,
            year: year
        })
            .then(value => {
                setOnSave(prev => !prev);
            })
    },
    updateCar: (data, carForUpdate, setOnSave, setCarForUpdate) => {
        const {brand, price, year} = data;
        instance.put(`${carForUpdate.id}`, {
            brand: brand,
            price: price,
            year: year
        }).then(() => {
            setOnSave(prev => !prev);
            setCarForUpdate(null);
        })
    }

}