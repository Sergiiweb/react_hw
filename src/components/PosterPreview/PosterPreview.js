import {basePosterURL} from "../../constants";
import css from './PosterPreview.module.css';

const PosterPreview = ({poster_path, title}) => {
    return (
        <div className={css.posterWrapper}>
            <img src={`${basePosterURL}${poster_path}`} alt={title}/>
        </div>
    );
};

export {PosterPreview};