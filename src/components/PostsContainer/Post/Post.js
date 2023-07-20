import React, {useEffect, useState} from 'react';
import styles from './Posts.module.css'
import {postsService} from "../../../services/postsService";
import {useNavigate, useParams} from "react-router-dom";
import {AppRoutes} from "../../../routing/AppRoutes";

const Post = () => {
    const {postId} = useParams();
    const [post, setPost] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        postsService.getById(postId).then(({data}) => setPost(data))
    }, [postId])
    const {userId, id,title,body} = post;

    const hide = () => {
      navigate(AppRoutes.COMMENTS)
    }

    return (
        <div className={styles.wrap}>
            <div><b>Post with id: {id}</b></div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <div className={styles.btn}><button onClick={hide}>hide</button></div>
        </div>
    );
};

export {Post};