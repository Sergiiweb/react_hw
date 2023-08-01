import React from "react";
import {commentsService} from "../../services";
import {Comment} from "./Comment/Comment";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        commentsService.getAll().then(({data}) => this.setState(data));
    }

    render() {
        console.log(this.state);
        const result = Object.keys(this.state).map((key) => [ this.state[key]]);
        console.log(result);
        return (
            <div>
                {result.map(comment=><Comment key={comment.id} post={comment}/>)}
            </div>
        )
    }
}

export {
    Comments
};