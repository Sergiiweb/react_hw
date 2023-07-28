import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {moviesService} from "../../services";
import {MovieDetails} from "./MovieDetails/MovieDetails";
import css from './MovieInfo.module.css';

const MovieInfo = () => {
    const [movie, setMovie] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        moviesService.getById(movieId).then(({data}) => setMovie(data));
    }, [movieId])

    return (
        <div className={css.MovieInfoWrapper}>
            <MovieDetails movie={movie}/>
        </div>
    );
};

export {MovieInfo};