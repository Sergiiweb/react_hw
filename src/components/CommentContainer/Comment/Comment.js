import React from 'react';
import styles from './Comment.module.css';

const Comment = ({comment}) => {
    const {postId, id, name, email,body} = comment;
    return (
        <div className={styles.commentWrapper}>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Comment};