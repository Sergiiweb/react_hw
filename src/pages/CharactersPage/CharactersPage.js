import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import {Characters} from "../../components";
import css from './CharactersPage.module.css';

const CharactersPage = () => {
    const navigate = useNavigate();
    const {isLoading, errors} = useSelector(state => state.characters);

    return (
        <div>
            <div className={css.BackButton}>
                <button onClick={() => navigate(-1)}>back</button>
            </div>
            {isLoading && <h1 style={{textAlign: 'center'}}>Loading............</h1>}
            {errors && <h1 style={{textAlign: 'center'}}>{JSON.stringify(errors)}</h1>}
            <Characters/>
        </div>
    );
};

export {CharactersPage};