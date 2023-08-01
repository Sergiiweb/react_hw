import React from "react";
import {commentsService} from "../../services";
import {Comment} from "./Comment/Comment";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }

    componentDidMount() {
        commentsService.getAll().then(({data}) => this.setState({data}));
    }

    render() {
        const {data} = this.state;
        // const result = Object.keys(this.state).map((key) => [ this.state[key]]);
        return (
            <div>
                {data.map(comment=><Comment key={comment.id} comment={comment}/>)}
            </div>
        )
    }
}

export {
    Comments
};