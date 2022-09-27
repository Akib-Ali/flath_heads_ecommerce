import { ADD_TO_CART } from "./actionTypes";

const initState={
    cart:[],

}

const cartReducer=(state= initState,action)=>{

    const {type,payload}= action

    switch(type){
        case ADD_TO_CART:
            return {...state,cart: [...state.cart,payload]}

            default:
                return state;

    }
}

export {cartReducer}