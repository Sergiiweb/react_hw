import {SubmitHandler, useForm} from "react-hook-form";

import {IAuth} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks";
import {authActions} from "../redux";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const {register, reset, handleSubmit} = useForm<IAuth>();
    const dispatch = useAppDispatch();
    const {errors} = useAppSelector(state => state.auth);
    const navigate = useNavigate();

    const registerUser: SubmitHandler<IAuth> = async (user) => {
        const {meta:{requestStatus}} = await dispatch(authActions.register({user}));

        if (requestStatus === 'fulfilled'){
            reset();
            navigate('/login');
        }
    };

    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>Register</button>
            {errors?.username && <span>username already exist</span>}
        </form>
    );
};

export {RegisterPage};