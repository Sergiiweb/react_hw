import css from './MoviesListCard.module.css';
import {PosterPreview} from "../../PosterPreview/PosterPreview";
import {useNavigate} from "react-router-dom";
import {FilteredGenres} from "../../Genres/FilteredGenres/FilteredGenres";
import {StarsRating} from "../../StarsRating/StarsRating";

const MoviesListCard = ({movie}) => {
    const {id, title, poster_path, genre_ids, vote_average} = movie;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/movies/${id}`);
    }

    return (
        <div className={css.wrap}>
            <div onClick={handleClick}><PosterPreview poster_path={poster_path} title={title}/></div>
            <div className={css.descriptionWrap}>
                <div className={css.description} onClick={handleClick}>{title}</div>
                <FilteredGenres genre_ids={genre_ids}/>
                <StarsRating vote_average={vote_average}/>
            </div>
        </div>
    );
};

export {MoviesListCard};