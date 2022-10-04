import { PRODUCT_LOADING,PRODUCT_SUCCESS,PRODUCT_ERROR,CURRENT_PRODUCT_LOADING,CURRENT_PRODUCT_SUCCESS,CURRENT_PRODUCT_ERROR,MEN_PRODUCT_LOADING,MEN_PRODUCT_SUCCESS,MEN_PRODUCT_ERROR,WOMEN_PRODUCT_LOADING,WOMEN_PRODUCT_SUCCESS,WOMEN_PRODUCT_ERROR } 
from "./actionTypes"
const initState = {
    loading: false,
    error: false,
    products: [],
    currentProduct:{},
    menproducts:[],
    womenproducts:[]
}

const productReducer = (state = initState, action) => {

    switch (action.type) {
        case PRODUCT_LOADING:
            return { ...state, loading: true }

        case PRODUCT_ERROR:
            return { ...state, loading: false, error: true }


        case PRODUCT_SUCCESS:
            return { ...state, loading: false, error: false, products: action.payload }


            case CURRENT_PRODUCT_LOADING:
                return { ...state, loading: true }
    
            case CURRENT_PRODUCT_ERROR:
                return { ...state, loading: false, error: true }
    
    
            case CURRENT_PRODUCT_SUCCESS:
                return { ...state, loading: false, error: false, currentProduct: action.payload }


                // menproduct

                case MEN_PRODUCT_LOADING:
                    return {...state, loading : true}


                    case MEN_PRODUCT_ERROR:
                        return {...state, loading:false,  error:true}


                        case MEN_PRODUCT_SUCCESS:
                            return {...state, loading : false, error:false , menproducts : action.payload}


                            // womenproduct

                            case WOMEN_PRODUCT_LOADING:
                                return {...state,loading: true}

                                case WOMEN_PRODUCT_ERROR:
                                    return {...state, loading:false, error: true}


                                    case WOMEN_PRODUCT_SUCCESS:
                                        return {...state, loading:false, error: false, womenproducts: action.payload}



                
    

            default:
                return state;
 }

}


export {productReducer}


