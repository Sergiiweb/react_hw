import {MoviesList} from "../../../components";
import css from './MoviesPage.module.css';

const MoviesPage = () => {
    return (
        <div className={css.MoviesPageWrapper}>
            <div className={css.MoviesListWrapper}>
                <MoviesList/>
            </div>
        </div>
    );
};

export {MoviesPage};