import { PRODUCT_LOADING,PRODUCT_SUCCESS,PRODUCT_ERROR,CURRENT_PRODUCT_LOADING,CURRENT_PRODUCT_SUCCESS,CURRENT_PRODUCT_ERROR } from "./actionTypes"
const handleLoading=(payload)=>({
    type:PRODUCT_LOADING,
    payload
})


const handleError=()=>({
    type:PRODUCT_ERROR
})

const handleSuccess=(payload)=>({
    type:PRODUCT_SUCCESS,
    payload
})


// add thunk

const getData = () => (dispatch) => {

        dispatch(handleLoading())
        fetch("https://doctor-patient123.herokuapp.com/products")
        .then((res)=> res.json())
        .then((res)=> dispatch(handleSuccess(res)))                                          //pehle console.log(res)
        .catch(()=> dispatch(handleError()))

}




//current Page K liye


const handleCurrentProductLoading=(payload)=>({
    type:CURRENT_PRODUCT_LOADING,
    payload
})


const handleCurrentProductError=()=>({
    type:CURRENT_PRODUCT_ERROR,
})

const handleCurrentProductSuccess=(payload)=>({
    type:CURRENT_PRODUCT_SUCCESS,
    payload
})



 const getCurrentProductData = (id) => (dispatch) => {

        dispatch(handleCurrentProductLoading())
        fetch(`https://doctor-patient123.herokuapp.com/products/${id}`)
        .then((res)=> res.json())
        .then((res)=> dispatch(handleCurrentProductSuccess(res)))                                     //pehle console.log(res)
        .catch(()=> dispatch(handleCurrentProductError()))

}




export {getData,getCurrentProductData}


// export {storeData,handleLoading,handleError, getData,getCurrentProductData}