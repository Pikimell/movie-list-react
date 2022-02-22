import {combineReducers, createStore} from "redux";
import {filmReducer} from "./FilmReducer";

const rootReducer = combineReducers({
    filmReducer
})

export const store = createStore(rootReducer)