import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, applyMiddleware(thunk));
