import css from './EpisodesPagination.module.css';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const EpisodesPagination = () => {
    const {nextPage, prevPage} = useSelector(state => state.episodes);
    const [, setQuery] = useSearchParams();

    const toPrevPage = () => {
        setQuery(prev => ({...prev, page: +prev.get('page') - 1}))
    };

    const onNextPage = () => {
        setQuery(prev => ({...prev, page: +prev.get('page') + 1}))
    };

    return (
        <div className={css.EpisodesPagination}>
            <button disabled={!prevPage} onClick={toPrevPage}>prevPage</button>
            <button disabled={!nextPage} onClick={onNextPage}>nextPage</button>
        </div>
    );
};

export {EpisodesPagination};