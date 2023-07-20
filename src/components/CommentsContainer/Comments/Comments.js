import React, {useEffect, useState} from 'react';
import {Comment} from "../Comment/Comment";
import {commentsService} from "../../../services/commentsService";
import styles from './Comments.module.css'
import {Outlet} from "react-router-dom";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    }, [])

    return (
        <div>
            <h2>Comments:</h2>
            <div className={styles.wrap}>
                <div>{comments.map(comment => <Comment key={comment.id} comment={comment}/>)}</div>
                <div className={styles.postWrap}><Outlet/></div>
            </div>
        </div>
    );
};

export {Comments};