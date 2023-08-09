import {charactersActionsTypes} from "../actions/charactersActions";

const initialState = {
    characters: []
};

const charactersReducer = (state=initialState, action) => {
    switch (action.type) {
        case charactersActionsTypes.SET_CHARACTERS_BY_IDS:
            return {
                ...state,
                characters: action.payload
            }
        default:
            return state
    }
}
export {
    charactersReducer
}