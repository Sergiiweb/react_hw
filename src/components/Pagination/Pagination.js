import css from './Pagination.module.css';
import {useNavigate, useParams} from "react-router-dom";
const Pagination = ({totalPages}) => {
    const navigate = useNavigate();
    let {page} = useParams();

    const handleClickNext = (page) => {
        page = +page + 1;
        navigate(`/movies/${page}`);
    };

    const handleClickPrev = (page) => {
        page = +page - 1;
        navigate(`/movies/${page}`);
    };

    return (
        <div className={css.wrap}>
            <div className={css.Button}>{page>1 ? (<button onClick={()=>handleClickPrev(page)}>PrevPage</button>) :
                <button disabled>PrevPage</button>}</div>
            <div className={css.Button}>{page<=totalPages ? <button onClick={()=>handleClickNext(page)}>NextPage</button> :
                <button disabled>NextPage</button>}</div>
        </div>
    );
};

export {Pagination};