import React, {useEffect} from 'react';
import {Comment} from "../Comment/Comment";

const Comments = ({comments, setComments}) => {

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))
    }, []);

    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment} />)}
        </div>
    );
};

export {Comments};