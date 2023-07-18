import {baseUrl, Endpoints} from "../api/endpoints";
import axios from "axios";

const instance = axios.create({
    baseURL: baseUrl,
    headers: {'Content-type': 'application/json'}
});
export const UserServices = {
    getUsers: (setUsers) => {
        instance.get(Endpoints.USERS)
            .then(value => setUsers(value.data))
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

export const CommentServices = {
    getComments: (setComments) => {
        instance.get(Endpoints.COMMENTS)
            .then(value => setComments(value.data))
    },
    // getComments: (setComments) => {
    //     fetch(baseUrl + Endpoints.COMMENTS)
    //         .then(value => value.json())
    //         .then(value => setComments(value))
    // },
    addComment: (comment, setComments) => {
        instance.post(Endpoints.COMMENTS, {
            body: JSON.stringify(comment)
        })
            .then(value => {
                setComments(prev => [...prev, value.data]);
                console.log(value.data);
                console.log(JSON.parse(value.data.body));
            })
    },
    // addComment: (comment, setComments) => {
    //     fetch(baseUrl + Endpoints.COMMENTS, {
    //         headers: {'Content-type': 'application/json'},
    //         method: 'POST',
    //         body: JSON.stringify(comment)
    //     })
    //         .then(value => value.json())
    //         .then(value => {
    //             setComments(prev => [...prev, value]);
    //             console.log(value);
    //         })
    // },
    // addComment: (comment, setComments) => {
    //     axios({
    //         method: 'post',
    //         url: baseUrl + Endpoints.COMMENTS,
    //         data: JSON.stringify(comment)
    //     })
    //             .then(value => {
    //                 setComments(prev => [...prev, value.data]);
    //                 console.log(value);
    //     });
    // },
}