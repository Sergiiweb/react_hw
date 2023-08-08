import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";

import {usersReducer} from "./reducers/usersReducer";

const rootReducer = combineReducers({
    usersReducer: usersReducer,
})

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
});
const store = createStore(rootReducer, composeEnhancers());

export {
    store
};