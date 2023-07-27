import {useEffect, useState} from "react";
import {genresService} from "../../services";
import {Genre} from "./Genre/Genre";

const Genres = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        genresService.getAll().then(({data}) => setGenres(data.genres));
    }, [])

    return (
        <div>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};