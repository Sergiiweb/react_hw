import style from "../PostsComponent/PostComponent.module.css";

const PostsDetailsComponent = (props) => {
    const {post, handleClick} = props;
    return (
        <div className={style.container}>
            <div>Post id: {post.id}</div>
            <div>Post title: {post.title}</div>
            <div>Post body: {post.body}</div>
            <button onClick={()=>handleClick(post.id)}>Show less about Post</button>
        </div>
    );
}

export default PostsDetailsComponent;