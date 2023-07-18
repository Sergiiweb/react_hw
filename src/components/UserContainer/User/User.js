import React from 'react';
import styles from './User.module.css';

const User = ({user}) => {
    const {id, name, username, email, address: {city}} = user;
    return (
        <div className={styles.userWrapper}>
            <div>id: {id}</div>
            <div>name: {username}</div>
            <div>username: {name}</div>
            <div>email: {email}</div>
            <div>city: {city}</div>
        </div>
    );
};

export {User};