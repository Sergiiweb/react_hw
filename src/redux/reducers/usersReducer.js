const initialState = {
    info: {},
    results: [],
    count: 0,
    error: ''
}

const UsersActionType = {
    SET_USERS: 'SET_USERS',
    SET_ERROR: 'SET_ERROR',
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UsersActionType.SET_USERS:
            return {
                ...state,
                results: action.payload.results,
                info: action.payload.info,
                count: state.count + 1
            }
        case UsersActionType.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export {
    usersReducer,
    UsersActionType
}