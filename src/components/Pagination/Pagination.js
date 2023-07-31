import css from './Pagination.module.css';
const Pagination = ({page, setPage, totalPages}) => {
    const handleClickNext = (page) => {
        setPage(page+1);
    };

    const handleClickPrev = (page) => {
        setPage(page-1);
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