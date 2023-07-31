import css from './Footer.module.css';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className={css.Header}>
            <div className={css.nav}>
                <NavLink to={'/movies'}>Movies</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
            </div>
            <div>The Movie app©, 2023</div>
            <NavLink to={''}><div className={css.logo}></div></NavLink>
        </div>
    );
};

export {Footer};