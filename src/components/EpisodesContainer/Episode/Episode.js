import {useNavigate} from "react-router-dom";

import css from './Episode.module.css';

const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;
    const navigate = useNavigate();
    const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');
    return (
        <div className={css.Episode} onClick={()=>navigate('/characters', {state:ids})}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
        </div>
    );
};

export {Episode};