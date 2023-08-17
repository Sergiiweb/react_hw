import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

import {Character} from "../Character/Character";
import css from './Characters.module.css';
import {charactersActions} from "../../../redux";

const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    const {state: ids} = useLocation();
    useEffect(() => {
        dispatch(charactersActions.allByIds(ids))
    }, [dispatch])

    return (
        <div className={css.Characters}>
            {characters?.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};