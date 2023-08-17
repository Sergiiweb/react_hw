import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {charactersService} from "../../services";

const initialState = {
    characters: [],
    errors: null,
    isLoading: null
};

const allByIds = createAsyncThunk(
    'episodesSlice/allByIds',
    async (id, thunkAPI) => {
        try {
            const {data} = await charactersService.getByIds(id);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(allByIds.fulfilled, (state, action) => {
            state.characters = action.payload
        })
            .addMatcher(isPending(), state => {
                state.isLoading = true
                state.errors = null
            })
            .addMatcher(isFulfilled(), state => {
                state.isLoading = false
                state.errors = null
            })
            .addMatcher(isRejected(), (state, action) => {
                state.isLoading = false
                state.errors = action.payload
            })
})

const {reducer: charactersReducer, actions} = charactersSlice;

const charactersActions = {
    allByIds
}

export {
    charactersReducer,
    charactersActions
}