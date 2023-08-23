import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {ICar} from "../../interfaces";
import {carService} from "../../services";

interface IState {
    cars: ICar[];
    carForUpdate: ICar | null;
}

const initialState: IState = {
    cars: [],
    carForUpdate: null
};

const getAll = createAsyncThunk<ICar[], void>(
    'carsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const create = createAsyncThunk<void, { car: ICar }>(
    'carsSlice/create',
    async ({car}, {rejectWithValue, dispatch}) => {
        try {
            await carService.create(car);
            await dispatch(getAll());
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const update = createAsyncThunk<void, { id: number, car: ICar }>(
    'carsSlice/update',
    async ({id, car}, {rejectWithValue, dispatch}) => {
        try {
            await carService.updateById(id, car);
            await dispatch(getAll());
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const deleteCar = createAsyncThunk<void, { id: number }>(
    'carsSlice/deleteCar',
    async ({id}, {rejectWithValue, dispatch}) => {
        try {
            await carService.deleteById(id);
            await dispatch(getAll());
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
            state.cars = action.payload;
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