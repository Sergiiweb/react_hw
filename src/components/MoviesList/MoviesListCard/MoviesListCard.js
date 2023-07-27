const MoviesListCard = ({movie}) => {
    const {id, original_title} = movie;
    
    return (
        <div>
            <div>id: {id}</div>
            <div>original_title: {original_title}</div>
        </div>
    );
};

export {MoviesListCard};