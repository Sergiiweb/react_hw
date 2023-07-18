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
    addUser: (user, setUsers) => {
        const {name, username, email, address: {city}} = user;

        instance.post(Endpoints.USERS, {
            name: name,
            username: username,
            email: email,
            address:{city: city}
        })
            .then(value => {
                setUsers(prev => [...prev, value.data]);
                console.log(value.data);
            })
    }
}

export const CommentServices = {
    getComments: (setComments) => {
        instance.get(Endpoints.COMMENTS)
            .then(value => setComments(value.data))
    },
    addComment: (comment, setComments) => {
        const {postId, name, email,body} = comment;
        instance.post(Endpoints.COMMENTS, {
            postId: postId,
            name: name,
            email: email,
            body: body
        })
            .then(value => {
                setComments(prev => [...prev, value.data]);
                console.log(value.data);
            })
    }
}