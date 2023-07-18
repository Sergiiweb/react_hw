import React from 'react';
import {useForm} from "react-hook-form";
import styles from './UserForm.module.css';
import {UserServices} from "../../../services/apiServices";

const UserForm = ({setUsers}) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const save = (user) => {
        UserServices.addUser(user, setUsers);
        reset();
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