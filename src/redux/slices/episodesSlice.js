import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {episodesService} from "../../services";

const initialState = {
    prevPage: null,
    nextPage: null,
    episodes: []
};

const all = createAsyncThunk(
    'episodesSlice/all',
    async (page, thunkAPI) => {
        try {
            const {data} = await episodesService.getAll(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(all.fulfilled, (state, action) => {
            state.episodes = action.payload.results
            state.prevPage = action.payload.info.prev
            state.nextPage = action.payload.info.next
        })
})

const {reducer: episodesReducer, actions} = episodesSlice;

const episodesActions = {
    all
}

export {
    episodesReducer,
    episodesActions
}