import React from 'react';
import {User} from "./User/User";

const Users = ({user}) => {
    return (
        <div>
            <User key={user.id} user={user}/>
        </div>
    );
};

export {Users};