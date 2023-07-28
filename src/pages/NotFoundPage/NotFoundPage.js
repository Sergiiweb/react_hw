import css from './NotFoundPage.module.css';
import {NavLink} from "react-router-dom";
const NotFoundPage = () => {

    return (
        <div className={css.NotFoundPage}>
            NotFoundPage
            <NavLink to={''}>To main</NavLink>
        </div>
    );
};

export {NotFoundPage};