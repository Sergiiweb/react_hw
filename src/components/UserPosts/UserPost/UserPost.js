import React from 'react';
import styles from './UserPost.module.css'

const UserPost = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div className={styles.container}>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <p>body: {body}</p>
        </div>
    );
};

export {UserPost};