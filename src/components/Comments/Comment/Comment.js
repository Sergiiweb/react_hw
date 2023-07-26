import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../../../pages";

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment;

    const navigate = useNavigate();
    const {setCommentId} = useContext(Context);

    const handleClick = () => {
        navigate(`posts/${postId}`);
        setCommentId(id);
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={handleClick}>GetPost</button>
        </div>
    );
};

export {Comment};