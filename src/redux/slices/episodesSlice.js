import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {episodesService} from "../../services";

const initialState = {
    prevPage: null,
    nextPage: null,
    episodes: [],
    episodeTitle: null,
    errors: null,
    isLoading: null
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
    reducers: {
        setEpisodeTitle: (state, action) => {
            state.episodeTitle = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(all.fulfilled, (state, action) => {
                state.episodes = action.payload.results;
                state.prevPage = action.payload.info.prev;
                state.nextPage = action.payload.info.next;
                state.episodeTitle = null;
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

const {reducer: episodesReducer, actions: {setEpisodeTitle}} = episodesSlice;

const episodesActions = {
    all,
    setEpisodeTitle
}

export {
    episodesReducer,
    episodesActions
}