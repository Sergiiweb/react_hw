import PostsComponent from "../PostsComponent/PostsComponent";
import {useEffect, useState} from "react";

const PostsContainer = () => {

    const [posts, setPosts] = useState([]);
    const [show,setShow] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((posts) => setPosts(posts))
            .catch((e) => console.log('e'))
    }, [])

    const handleClick = (v) => {
        show ? setShow(false) : setShow(true);
        console.log(show, v);
    }

    return (
        <>
            <div className={"header"}>HW2 Task1</div>
            {posts.map((post) => {
                return (
                    <PostsComponent
                        key={post.id}
                        post={post}
                        handleClick={handleClick}
                    />)
            })}
        </>
    );
};

export default PostsContainer;