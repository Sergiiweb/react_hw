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
    // getUsers: (setUsers) => {
    //     fetch(baseUrl + Endpoints.USERS)
    //         .then(value => value.json())
    //         .then(value => setUsers(value))
    // },
    addUser: (user, setUsers) => {
        instance.post(Endpoints.USERS, {
            body: JSON.stringify(user)
        })
            .then(value => {
                // setUsers(prev => [...prev, value.data.body]);
                console.log(value.data);
            })
    },
    // addUser: (user, setUsers) => {
    //     fetch(baseUrl + Endpoints.USERS, {
    //         headers: {'Content-type': 'application/json'},
    //         method: 'POST',
    //         body: JSON.stringify(user)
    //     })
    //         .then(value => value.json())
    //         .then(value => {
    //             setUsers(prev => [...prev, value]);
    //             console.log(value);
    //         })
    // }
}