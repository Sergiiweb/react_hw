import React, {useEffect, useState} from 'react';
import {UserComponent} from "./UserComponent/UserComponent";

const UsersComponent = ({isShow, setUserId, setIsShow}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [])
    return (
        <div className={'wrap'}>
            {users.map((user) => <UserComponent key={user.id} user={user} setUserId={setUserId} setIsShow={setIsShow}
                                                isShow={isShow}/>)}
        </div>
    );
};

export {UsersComponent};
