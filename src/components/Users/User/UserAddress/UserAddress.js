import React from 'react';

const UserAddress = ({user}) => {
    const {address:{street, suite, city}} = user;
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