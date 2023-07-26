import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services";
import {PostDetail} from "./PostDetail/PostDetail";

const Post = () => {
    const [post, setPost] = useState(null);
    const {postId} = useParams();

    useEffect(() => {
        postService.getById(postId).then(({data}) => setPost(data));
    }, [postId])

    return (
        <div>
            {post && <PostDetail post={post}/>}
        </div>
    );
};

export {Post};