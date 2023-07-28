import css from './MoviesListCard.module.css';
import {PosterPreview} from "../../PosterPreview/PosterPreview";
import {useNavigate} from "react-router-dom";
import {FilteredGenres} from "../../Genres/FilteredGenres/FilteredGenres";

const MoviesListCard = ({movie}) => {
    const {id, title, poster_path, genre_ids} = movie;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/movies/${id}`);
    }

    return (
        <div className={css.wrap} onClick={handleClick}>
            <PosterPreview poster_path={poster_path} title={title}/>
            <div className={css.descriptionWrap}>
                <div className={css.description}>{title}</div>
                <FilteredGenres genre_ids={genre_ids}/>
            </div>
        </div>
    );
};

export {MoviesListCard};