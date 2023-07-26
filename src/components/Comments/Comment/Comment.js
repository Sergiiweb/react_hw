import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment;

    const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={() => navigate(`posts/${postId}`)}>GetPost</button>
        </div>
    );
};

export {Comment};