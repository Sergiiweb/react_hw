const PostDetail = ({post}) => {
    const {id, title} = post;
    
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {PostDetail};