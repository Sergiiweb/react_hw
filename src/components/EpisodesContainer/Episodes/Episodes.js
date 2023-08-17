import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {episodesActions} from "../../../redux";
import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css';

const Episodes = () => {
    const dispatch = useDispatch();
    const {episodes} = useSelector(store => store.episodes);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(episodesActions.all(query.get('page')));
        setQuery(prev => ({...prev, page: prev.get('page')}));
    }, [dispatch])

    return (
        <div>
            <div className={css.Episodes}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
        </div>
    );
};

export {Episodes};