import { legacy_createStore , applyMiddleware , combineReducers,compose } from "redux";
import thunk from 'redux-thunk'
import { productReducer } from "./Products/reducer";
import { cartReducer } from "./Cart/reducer";

const rootReducer = combineReducers({
    product: productReducer,
    cart : cartReducer,
    
})




 const store = legacy_createStore(rootReducer,applyMiddleware(thunk))


export {store} 