import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'app'}>App</NavLink>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'array'}>Array</NavLink>
        </div>
    );
};

export {Header};