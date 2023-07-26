import {Outlet} from "react-router-dom";

import {Comments} from "../../components";
import css from './CommentsPage.module.css';
import {useState} from "react";

const CommentsPage = () => {
    const [commentId, setCommentId] = useState(null);

    return (
        <div className={css.CommentsPage}>
            <div className={css.Comments}><Comments setCommentId={setCommentId}/></div>
            <div className={css.Outlet}><Outlet context={{commentId}}/></div>
        </div>
    );
};

export {CommentsPage};