import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {usersActions} from "../../redux";
import css from './Users.module.css'
import {User} from "./User/User";
import {charactersService} from "../../services";
const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state)=>state.usersReducer.results);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(()=>{
        charactersService.getAll(query.get('page'))
            .then(({data}) => {
                dispatch(usersActions.setUsers(data));
                setQuery(prev => ({...prev, page: prev.get('page')}));
            })
    },[query,dispatch,setQuery]);

    return (
        <div className={css.Users}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};