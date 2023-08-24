import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {ICar, IPagination} from "../../interfaces";
import {carService} from "../../services";

interface IState {
    cars: ICar[];
    carForUpdate: ICar | null;
    pages: number;
}

const initialState: IState = {
    cars: [],
    carForUpdate: null,
    pages: 0
};

const getAll = createAsyncThunk<IPagination<ICar>, { page: number }>(
    'carsSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const create = createAsyncThunk<void, { car: ICar, page: number }>(
    'carsSlice/create',
    async ({car, page}, {rejectWithValue, dispatch}) => {
        try {
            await carService.create(car);
            console.log(page);
            // @ts-ignore
            await dispatch(getAll(page));
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const update = createAsyncThunk<void, { id: number, car: ICar, page:number }>(
    'carsSlice/update',
    async ({id, car, page}, {rejectWithValue, dispatch}) => {
        try {
            await carService.updateById(id, car);
            // @ts-ignore
            await dispatch(getAll(page));
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const deleteCar = createAsyncThunk<void, { id: number, page:number }>(
    'carsSlice/deleteCar',
    async ({id, page}, {rejectWithValue, dispatch}) => {
        try {
            await carService.deleteById(id);
            // @ts-ignore
            await dispatch(getAll(page));
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action: PayloadAction<{ car: ICar }>) => {
            state.carForUpdate = action.payload.car;
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload.items;
            state.pages = action.payload.total_pages;
        })
        .addCase(update.fulfilled, state => {
            state.carForUpdate = null;
        })
});


const {reducer: carsReducer, actions} = carsSlice;

const carsActions = {
    ...actions,
    getAll,
    create,
    update,
    deleteCar
};

export {
    carsReducer,
    carsActions
}