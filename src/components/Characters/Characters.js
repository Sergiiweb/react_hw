import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {charactersActions} from "../../redux";
import {Character} from "../Character/Character";
import css from './Characters.module.css';

const Characters = (effect, deps) => {
    const {state: {ids}} = useLocation()
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);

    useEffect(() => {
        dispatch(charactersActions.getByIds({ids}));
    }, [dispatch, ids])

    return (
        <div className={css.Characters}>
            {characters.map(character => <Character kei={character.ia} character={character}/>)}
        </div>
    );
};

export {Characters};