import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    prevPage: null,
    nextPage: null,
    episodes: []
};

const episodesSlice = createSlice({
    name:'episodesSlice',
    initialState,
    reducers:{

    },
    extraReducers:{

    }
})

const {reducer:episodesReducer, actions} = episodesSlice;

const episodesActions = {

}

export {
    episodesReducer,
    episodesActions
}