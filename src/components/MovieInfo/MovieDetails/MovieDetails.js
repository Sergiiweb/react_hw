import {basePosterURL} from "../../../constants";

const MovieDetails = ({movie}) => {
    const {id, poster_path, release_date, title, genres} = movie;

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>release_date: {release_date}</div>
            <div>{genres?.map(genre=>(<div key={genre.id}>{genre.name}</div>))}</div>
            <div><img src={basePosterURL+poster_path} alt={title}/></div>
        </div>
    );
};

export {MovieDetails};