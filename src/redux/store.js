import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";

import {carsReducer} from "./reducers";

const rootReducer = combineReducers({
    cars: carsReducer
});

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export {
    store
}