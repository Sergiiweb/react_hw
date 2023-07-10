import React, {useEffect, useState} from 'react';
import {UserPost} from "./UserPost/UserPost";

const UserPosts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [userId])
    return (
        <div>
            {posts.map(post => <UserPost key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPosts};