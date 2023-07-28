import {useEffect, useState} from "react";

import {genresService} from "../../../services";
import {Genre} from "../Genre/Genre";
import css from './FilteredGenres.module.css';

const FilteredGenres = ({genre_ids}) => {
    const [genres, setGenres] = useState([]);
    // console.log(genre_ids);

    useEffect(() => {
        genresService.getAll().then(({data}) => {
            setGenres(data.genres.filter(value => genre_ids.includes(value.id)))
        });
    }, [])

    return (
        <div className={css.FilteredGenresWrap}>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {FilteredGenres};