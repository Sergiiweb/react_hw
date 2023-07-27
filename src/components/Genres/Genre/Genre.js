const Genre = ({genre}) => {
    const {name} = genre;

    return (
        <div>
            <div>{name}</div>
        </div>
    );
};

export {Genre};