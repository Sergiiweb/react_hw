import {combineReducers, createStore} from "redux";

import {carsReducer} from "./reducers";
import {composeWithDevTools} from "@redux-devtools/extension";

const rootReducer = combineReducers({
    cars: carsReducer
});

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
});

const store = createStore(rootReducer, composeEnhancers());

export {
    store
}