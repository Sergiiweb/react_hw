import {useEffect, useState} from "react";
import {moviesService} from "../../services";
import {MoviesListCard} from "./MoviesListCard/MoviesListCard";

const MoviesList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        moviesService.getAll().then(({data})=>{
            setMovies(data.results);
            // console.log(data.results);
        });
    },[])

    return (
        <div>
            {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};