import { ADD_TO_CART,INCREASE_QTY,DECREASE_QTY,REMOVE_FROM_CART } from "./actionTypes";

const initState={
     cart:[],

    }



// localStorage.setItem("list",JSON.stringify(cart))

// let's check in the cart if the same product is present
//if present we will increase quantity
// else - we will add to product to cart

const cartReducer=(state= initState,action)=>{

    const {type,payload}= action

     switch(type){
        
        case ADD_TO_CART:
        
            //  return {...state,cart: [...state.cart,payload]}
              const ispresent = state.cart.find((prod)=>{
                return prod.id === payload.id && prod.size === payload.size
            })


            let newCart
            // if present we will increase quantity 
            if(ispresent){
                newCart = state.cart.map((prod)=>{
                    if(prod.id === payload.id && prod.size === payload.size){
                        return {...prod,qty: prod.qty+1}

                    }else{
                        return prod
                    }
                })

            }

            else{
                let newPayload ={
                    ...payload,
                    qty:1
                }
                newCart = [...state.cart, newPayload]
            }
            return {...state,cart:newCart}



            case INCREASE_QTY:
                let modifiedCart = state.cart.map((prod)=>{
                    if(prod.id === payload.id && prod.size === payload.size){
                        return {...prod,qty: prod.qty+1}

                    }else{
                        return prod
                    }
                })

                return {...state, cart : modifiedCart}



                case DECREASE_QTY:
                let resultantCart = state.cart.map((prod)=>{
                    if(prod.id === payload.id && prod.size === payload.size){
                        return {...prod,qty: prod.qty-1}

                    }else{
                        return prod
                    }
                })

                return {...state, cart : resultantCart}



                case REMOVE_FROM_CART :
                    let updateCart = state.cart.filter((prod)=>{
                        return !(prod.size === payload.size && prod.id === payload.id)
                    })
                    return {...state, cart : updateCart}






            default:
                return state;

    }
}

export {cartReducer}