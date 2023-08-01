import {useEffect, useState} from "react";

import {moviesService} from "../../services";
import {MoviesListCard} from "./MoviesListCard/MoviesListCard";
import {Pagination} from "../Pagination/Pagination";
import css from './MoviesList.module.css';
import {useParams} from "react-router-dom";

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(null);
    let {page} = useParams();

    useEffect(() => {
        moviesService.getAll(page).then(({data}) => {
            setMovies(data.results);
            setTotalPages(data.total_pages);
        });
    }, [page])

    return (
        <div className={css.MoviesListWrap}>
            <div className={css.MoviesListWrapper}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <div><Pagination totalPages={totalPages}/></div>
        </div>
    );
};

export {MoviesList};