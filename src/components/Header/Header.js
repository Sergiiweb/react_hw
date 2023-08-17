import css from './Header.module.css';
import {NavLink, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className={css.Header}>
            <div className={css.Logo} onClick={()=>navigate('')}>Rick & Morty</div>
            {/*<div className={css.Nav}>*/}
            {/*    <NavLink to={'all-characters?page=1'}>Characters</NavLink>*/}
            {/*    <NavLink to={'episodes?page=1'}>Episodes</NavLink>*/}
            {/*</div>*/}
        </div>
    );
};

export {Header};