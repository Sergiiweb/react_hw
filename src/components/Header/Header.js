import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import css from './Header.module.css';

const Header = () => {
    const navigate = useNavigate();
    const {episodeTitle} = useSelector(state => state.episodes);

    return (
        <div className={css.Header}>
            <div className={css.Logo} onClick={() => navigate('')}>Rick & Morty</div>
            {episodeTitle && <div className={css.Nav}>
                {episodeTitle}
            </div>}
        </div>
    );
};

export {Header};