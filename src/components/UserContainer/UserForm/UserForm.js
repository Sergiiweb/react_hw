import React from 'react';
import {useForm} from "react-hook-form";
import styles from './UserForm.module.css';

const UserForm = ({setUsers}) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const save = (user) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            headers: {'Content-type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(user)
        })
            .then(value => value.json())
            .then(value => {
                setUsers(prev => [...prev, value]);
                reset();
            })
    }

    return (
        <div>
            <form className={styles.formWrap} onSubmit={handleSubmit(save)}>
                <label>name: <input type="text" placeholder={'name'} {...register('name')}/></label>
                <label>username: <input type="text" placeholder={'username'} {...register('username')}/></label>
                <label>email: <input type="text" placeholder={'email'} {...register('email')}/></label>
                <label>city: <input type="text" placeholder={'city'} {...register('address.city')}/></label>
                <button>Save</button>
            </form>

        </div>
    );
};

export {UserForm};