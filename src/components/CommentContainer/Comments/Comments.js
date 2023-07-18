import React, {useEffect} from 'react';
import {Comment} from "../Comment/Comment";
import {CommentServices} from "../../../services/apiServices";

const Comments = ({comments, setComments}) => {

    useEffect(() => {
        CommentServices.getComments(setComments);
    }, []);

    return (
        <div>
            {comments.map(comment=><Comment key={comment.id+20} comment={comment} />)}
        </div>
    );
};

export {Comments};