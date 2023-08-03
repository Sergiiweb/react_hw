import {useState} from "react";
import {useFetch} from "../../hooks/useFetch";
import {urls} from "../../constants";
import {Comment} from "./Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useFetch(setComments, urls.comments)

    return (
        <div>
            {comments?.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};