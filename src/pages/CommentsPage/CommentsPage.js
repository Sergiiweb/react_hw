import {Outlet} from "react-router-dom";

import {Comments} from "../../components";
import css from './CommentsPage.module.css';
import {createContext, useState} from "react";

const Context = createContext(null);

const CommentsPage = () => {
    const [commentId, setCommentId] = useState(null);

    return (
        <div className={css.CommentsPage}>
            <Context.Provider value={{setCommentId}}>
                <div className={css.Comments}><Comments /></div>
            </Context.Provider>
            <div className={css.Outlet}><Outlet context={{commentId}}/></div>
        </div>
    );
};

export {
    CommentsPage,
    Context
};