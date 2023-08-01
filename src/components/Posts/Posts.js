import React from "react";
import {postsService} from "../../services";
import {Post} from "./Post/Post";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }

componentDidMount() {
    postsService.getAll().then(({data}) => this.setState({data}));
}

    render() {
        const {data} = this.state;
        // const result = Object.keys(this.state).map((key) => [ this.state[key]]);
        return (
            <div>
                {data.map(post=><Post key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {
    Posts
};