import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {moviesService} from "../../services";
import {MovieDetails} from "./MovieDetails/MovieDetails";

const MovieInfo = () => {
    const [movie, setMovie] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        moviesService.getById(movieId).then(({data}) => setMovie(data));
    }, [movieId])

    return (
        <div>
            <h2>Movie Info:</h2>
            <MovieDetails movie={movie}/>
        </div>
    );
};

export {MovieInfo};