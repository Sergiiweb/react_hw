import React from 'react';
import {useForm} from "react-hook-form";
import styles from "../../UserContainer/UserForm/UserForm.module.css";
import {CommentServices} from "../../../services/apiServices";

const CommentForm = ({setComments}) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const save = (comment) => {
        CommentServices.addComment(comment, setComments);
        reset();
    }

    return (
        <div>
            <form className={styles.formWrap} onSubmit={handleSubmit(save)}>
                <label>postId: <input type="text" placeholder={'postId'} {...register('postId')}/></label>
                <label>name: <input type="text" placeholder={'name'} {...register('name')}/></label>
                <label>email: <input type="text" placeholder={'email'} {...register('email')}/></label>
                <label>body: <input type="text" placeholder={'body'} {...register('body')}/></label>
                <button>Save</button>
            </form>

        </div>
    );
};

export {CommentForm};