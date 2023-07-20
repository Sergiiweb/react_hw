import React from 'react';
import styles from './Comment.module.css';
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../../routing/AppRoutes";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;


    const navigate = useNavigate();

    const handleClick = (postId) => navigate(AppRoutes.COMMENTS + '/' + postId)

    return (
        <div className={styles.wrap} onClick={() => handleClick(postId)}>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Comment};