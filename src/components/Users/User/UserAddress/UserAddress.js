import React from 'react';

const UserAddress = ({address}) => {
    const {street, suite, city} = address;
    return (
        <div>
            <h2>UserAddress</h2>
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>city: {city}</div>
        </div>
    );
};

export {UserAddress};