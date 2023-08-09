import css from './UsersPagination.module.css';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const UsersPagination = () => {
    const {info} = useSelector(state => state.usersReducer);
    const [, setQuery] = useSearchParams();
    const {next:nextPage,prev:prevPage} = info;
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

export {UsersPagination};