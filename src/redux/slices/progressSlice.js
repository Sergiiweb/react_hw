import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false
};

const slice = createSlice({
    name: 'progressSlice',
    initialState,
    reducers: {
        setIsLoading:(state, action) => {
            state.isLoading = action.payload;
        }
    }
});

const {reducer:progressReducer, actions} = slice;

const progressActions = {
    ...actions
};

export {
    progressActions,
    progressReducer
}