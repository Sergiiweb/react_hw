import {useState} from "react";
import {useFetch} from "../../hooks/useFetch";
import {urls} from "../../constants";
import {Post} from "./Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useFetch(setPosts, urls.posts)

    return (
        <div>
            {posts?.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};