import {carsActionsTypes} from "../actions";

const initialState = {
    cars: [],
    carForUpdate: null
}

const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case carsActionsTypes.SET_CARS:
            return {
                ...state,
                cars: action.payload
            }
        case carsActionsTypes.SET_CAR_FOR_UPDATE:
            return {
                ...state,
                carForUpdate: action.payload
            }
        case carsActionsTypes.CREATE_CAR:
            return {
                ...state,
                cars: [...state.cars, action.payload]
            }
        case carsActionsTypes.UPDATE_CAR:
            return {
                ...state,
                cars: state.cars.map(car=> car.id === action.payload.id ? action.payload : car),
                carForUpdate: null
            }
        case carsActionsTypes.DELETE_CAR:
            return {
                ...state,
                cars: state.cars.filter(value => value.id !== action.payload)
            }
        default:
            return state
    }
}

export {
    carsReducer
}