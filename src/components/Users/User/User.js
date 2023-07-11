import React from 'react';
import {UserDetails} from "./UserDetails/UserDetails";
import {UserAddress} from "./UserAddress/UserAddress";
import {Company} from "./Company/Company";

const User = ({user}) => {
    const {address, company} = user;
    return (
        <div>
            <UserDetails key={user.id} user={user}/>
            <UserAddress key={address.city} address={address}/>
            <Company key={company.name} company={company}/>
            <hr/>
        </div>
    );
};

export {User};