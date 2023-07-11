import './App.css';
import {useEffect, useState} from "react";
import {Users} from "./components/Users/Users";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [])

    return (
        <div className="wrapper">
            {users.map((user) => <Users key={user.id} user={user}/>)}
        </div>
    );
}

export {App};
