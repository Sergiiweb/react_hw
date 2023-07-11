import React from 'react';
import {UserDetails} from "./UserDetails/UserDetails";
import {UserAddress} from "./UserAddress/UserAddress";
import {Company} from "./Company/Company";

const User = ({user}) => {
    return (
        <div>
            <UserDetails key={user.id} user={user}/>
            <UserAddress key={user.id} user={user}/>
            <Company key={user.id} user={user}/>
            <hr/>
        </div>
    );
};

export {User};