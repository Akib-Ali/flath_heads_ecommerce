import { legacy_createStore , applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import { productReducer } from "./Products/reducer";

const store = legacy_createStore(productReducer,applyMiddleware(thunk))

export {store} 