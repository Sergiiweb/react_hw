import {useNavigate} from "react-router-dom";

import {Characters} from "../../components";
import css from './CharactersPage.module.css';

const CharactersPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className={css.BackButton}><button onClick={()=>navigate(-1)}>back</button></div>
            <Characters/>
        </div>
    );
};

export {CharactersPage};