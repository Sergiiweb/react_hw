import css from './MoviesListCard.module.css';
import {PosterPreview} from "../../PosterPreview/PosterPreview";
const MoviesListCard = ({movie}) => {
    const {id, title, poster_path} = movie;
    
    return (
        <div className={css.wrap}>
            <PosterPreview poster_path={poster_path} title={title}/>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {MoviesListCard};