import React, {useEffect, useState} from 'react';
import {Comment} from "../Comment/Comment";
import {commentsService} from "../../../services/commentsService";
import {postsService} from "../../../services/postsService";
import {Post} from "../../PostsContainer/Post/Post";
import styles from './Comments.module.css'

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [post, setPost] = useState(null);

    const viewPost = (postId) => {
        postsService.getById(postId).then(({data}) => setPost(data))
    }

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    }, [])

    return (
        <div>
            <h2>Comments:</h2>
            <div className={styles.wrap}>
                <div>{comments.map(comment => <Comment key={comment.id} comment={comment} viewPost={viewPost}/>)}</div>
                <div className={styles.postWrap}>{post && <Post key={post.id} post={post}/>}</div>
            </div>
        </div>
    );
};

export {Comments};