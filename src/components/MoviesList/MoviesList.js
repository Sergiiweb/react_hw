import {useEffect, useState} from "react";

import {moviesService} from "../../services";
import {MoviesListCard} from "./MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css';

const MoviesList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        moviesService.getAll().then(({data})=>{
            setMovies(data.results);
            // console.log(data.results);
        });
    },[])

    return (
        <div className={css.MoviesListWrapper}>
            {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};