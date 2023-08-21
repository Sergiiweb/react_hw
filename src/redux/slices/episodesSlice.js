import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodesService} from "../../services";
import {progressActions} from "./progressSlice";

const initialState = {
    pages: null,
    episodes: [],
    current: null
};

const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            thunkAPI.dispatch(progressActions.setIsLoading(true));
            // await new Promise(resolve => setTimeout(resolve, 2000));
            const {data} = await episodesService.getAll(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        } finally {
            thunkAPI.dispatch(progressActions.setIsLoading(false));
        }
    }
)

const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {
        setCurrent:(state, action)=>{
            state.current = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            // state.episodes = action.payload.results;
            // state.pages = action.payload.info.pages;
            const {info: {pages}, results} = action.payload;
            state.current = null;
            state.pages = pages;
            state.episodes = results;
        })
});

const {reducer: episodesReducer, actions} = episodesSlice;

const episodesActions = {
    ...actions,
    getAll
}

export {
    episodesReducer,
    episodesActions
}