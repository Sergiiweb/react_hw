import React from 'react';
import {useForm} from "react-hook-form";
import styles from "../../UserContainer/UserForm/UserForm.module.css";

const CommentForm = ({setComments}) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const save = (comment) => {
        fetch('https://jsonplaceholder.typicode.com/comments', {
            headers: {'Content-type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(comment)
        })
            .then(value => value.json())
            .then(value => {
                setComments(prev => [...prev, value]);
                reset();
            })
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