import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import {UserInfo} from "../UserInfo/UserInfo";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={''}><div className={css.logo}></div></NavLink>
            <div className={css.nav}>
                <NavLink to={'/movies/1'}>Movies</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
            </div>
            <div>
                <UserInfo/>
            </div>
        </div>
    );
};

export {Header};