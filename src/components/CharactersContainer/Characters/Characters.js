import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

import {charactersService} from "../../../services";
import {charactersActions} from "../../../redux";
import {Character} from "../Character/Character";
import css from './Characters.module.css';

const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    const {state: {ids}} = useLocation();

    useEffect(() => {
        charactersService.getByIds(ids)
            .then(({data}) => dispatch(charactersActions.setByIds(data)))
    }, [])

    return (
        <div className={css.Characters}>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};