import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <div className={css.Logo}>Rick & Morty</div>
            <div className={css.Nav}>
                <NavLink to={'users'}>Characters</NavLink>
                <NavLink to={'episodes'}>Episodes</NavLink>
                {/*<NavLink to={'characters'}>CharactersFromEpisodes</NavLink>*/}
            </div>
        </div>
    );
};

export {Header};