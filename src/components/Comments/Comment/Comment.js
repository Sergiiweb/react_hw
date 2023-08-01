import React from "react";

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {props}
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div>{this.state.props.comment[0].postId}</div>
                <div>{this.state.props.comment[0].id}</div>
                <div>{this.state.props.comment[0].name}</div>
                <div>{this.state.props.comment[0].email}</div>
                <div>{this.state.props.comment[0].body}</div>
            </div>
        )
    }
}

export {
    Comment
}