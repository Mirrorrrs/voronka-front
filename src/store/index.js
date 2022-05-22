import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import groupReducer from "./reducers/groupReducer";
import campReducer from "./reducers/campReducer";

const reducers = combineReducers({
    user: userReducer,
    group: groupReducer,
    camp: campReducer
})

const store = createStore(reducers, compose(applyMiddleware(thunk)))
export default store