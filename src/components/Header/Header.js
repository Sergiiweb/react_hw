import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <div className={css.logo}><NavLink to={''}>The Movies app</NavLink></div>
            <div className={css.nav}>Header</div>
        </div>
    );
};

export {Header};