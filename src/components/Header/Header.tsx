import {Link} from "react-router-dom";

import css from './Header.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authService} from "../../services";
import {authActions} from "../../redux";

const Header = () => {
    const {me} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    if (authService.getAccessToken() && !me) {
        dispatch(authActions.me());
    }

    return (
        <div className={css.Header}>
            <Link to={''} className={css.logoLink}>
                <div className={css.logo}></div>
            </Link>
            {
                me ?
                    <div className={css.isLogin}>UserName: {me.username} {new Date(me.last_login).toDateString()}</div>
                    :
                    <div>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </div>
            }
        </div>
    );
};

export {Header};