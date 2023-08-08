import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'users'}>Users</NavLink>
        </div>
    );
};

export {Header};