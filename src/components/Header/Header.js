import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <div className={css.Logo}>Rick & Morty</div>
            <div className={css.Nav}>
                <NavLink to={'all-characters'}>Characters</NavLink>
                <NavLink to={'episodes?page=1'}>Episodes</NavLink>
                {/*<NavLink to={'characters'}>CharactersFromEpisodes</NavLink>*/}
            </div>
        </div>
    );
};

export {Header};