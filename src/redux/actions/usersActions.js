import {UsersActionType} from "../reducers/usersReducer";

const usersActions = {
    setUsers: (data) => ({type: UsersActionType.SET_USERS, payload: data})
}

export {
    usersActions
}