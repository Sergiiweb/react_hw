import {useState} from "react";

import {urls} from "../../constants";
import {User} from "./User/User";
import {useFetch} from "../../hooks/useFetch";

const Users = () => {
    const [users, setUsers] = useState([]);

    useFetch(setUsers, urls.users)

    return (
        <div>
            {users?.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};