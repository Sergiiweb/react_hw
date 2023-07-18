import React, {useEffect} from 'react';
import {User} from "../User/User";
import {UserServices} from "../../../services/apiServices";

const Users = ({users, setUsers}) => {

    useEffect(()=>{
        UserServices.getUsers(setUsers);
    },[]);

    return (
        <div>
            {users.map(user=><User key={user.id} user={user} />)}
        </div>
    );
};

export {Users};