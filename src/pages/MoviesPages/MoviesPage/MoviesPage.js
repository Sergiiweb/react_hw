import {MoviesList} from "../../../components";
import css from './MoviesPage.module.css';

const MoviesPage = () => {
    return (
        <div className={css.MoviesPageWrapper}>
            <h2>Movies List:</h2>
            <div className={css.MoviesListWrapper}>
                <MoviesList/>
            </div>
        </div>
    );
};

export {MoviesPage};