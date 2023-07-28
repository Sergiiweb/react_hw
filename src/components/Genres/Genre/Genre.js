import css from './Genre.module.css';
import {useNavigate} from "react-router-dom";
const Genre = ({genre}) => {
    const {name, id} = genre;
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`genreId/${id}`)
    };

    return (
        <div className={css.genreWrap} onClick={()=>handleClick(id)}>
            <div>{name}</div>
        </div>
    );
};

export {Genre};