import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {baseURL, urls} from "../../constants";
import {usersActions} from "../../redux";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state)=>state.usersReducer.results);

    useEffect(()=>{
        fetch(`${baseURL}${urls.character}`)
            .then(response=>response.json())
            .then(data => dispatch(usersActions.setUsers(data)))
    },[]);

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <div>{user.name}</div>
                    <img src={user.image} alt="" style={{width: 100, height: 100}}/>
                </div>
            ))}
        </div>
    );
};

export {Users};