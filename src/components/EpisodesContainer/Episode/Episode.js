import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './Episode.module.css';
import {episodesActions} from "../../../redux";

const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');

    return (
        <div className={css.Episode} onClick={() => {
            dispatch(episodesActions.setEpisodeTitle(name));
            navigate('/characters', {state: ids});
        }}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
        </div>
    );
};

export {Episode};