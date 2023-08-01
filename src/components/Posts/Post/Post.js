import React from "react";

class Post extends React.Component {

    render() {
        const {post} = this.props;
        return (
            <div>
                <div>{post.userId}</div>
                <div>{post.id}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
            </div>
        )
    }
}

export {
    Post
}