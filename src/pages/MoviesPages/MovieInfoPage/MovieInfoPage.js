import {MovieInfo} from "../../../components";
import css from './MovieInfoPage.module.css';

const MovieInfoPage = () => {

    return (
        <div className={css.MovieInfoPage}>
            <MovieInfo/>
        </div>
    );
};

export {MovieInfoPage};