import React from 'react';

const UserDetails = ({user}) => {
    const {id, name, username, email, phone, website} = user;
    return (
        <div>
            <h2>UserDetails</h2>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
        </div>
    );
};

export {UserDetails};