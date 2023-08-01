import React from "react";

class Comment extends React.Component {

    render() {
        const {comment} = this.props;
        return (
            <div>
                <div>{comment.postId}</div>
                <div>{comment.id}</div>
                <div>{comment.name}</div>
                <div>{comment.email}</div>
                <div>{comment.body}</div>
            </div>
        )
    }
}

export {
    Comment
}