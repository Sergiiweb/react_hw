import style from "./PostComponent.module.css"

const PostsComponent = (props) => {
    const {post, handleClick} = props;
    return (
        <div className={style.container}>
            <div>Post id: {post.id}</div>
            <div>Post title: {post.title}</div>
            <button onClick={()=>handleClick(post.id)}>Show more about Post</button>
        </div>
    );
}

export default PostsComponent;