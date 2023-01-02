import { PRODUCT_LOADING,PRODUCT_SUCCESS,PRODUCT_ERROR,CURRENT_PRODUCT_LOADING,CURRENT_PRODUCT_SUCCESS,CURRENT_PRODUCT_ERROR,MEN_PRODUCT_LOADING,MEN_PRODUCT_ERROR,MEN_PRODUCT_SUCCESS,WOMEN_PRODUCT_LOADING,WOMEN_PRODUCT_SUCCESS,WOMEN_PRODUCT_ERROR } from "./actionTypes"
// import { useDispatch } from "react-redux"
import Axios from "axios"

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
// console.log(gender)



const getData = (payload) => (dispatch) => {

        dispatch(handleLoading())
         fetch("https://gorgeous-plum-fedora.cyclic.app/products",{
            params:{
                ...payload
            }

         })
        
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
        fetch(`https://gorgeous-plum-fedora.cyclic.app/products/${id}`)
        .then((res)=> res.json())
        .then((res)=> dispatch(handleCurrentProductSuccess(res)))                                     //pehle console.log(res)
        .catch(()=> dispatch(handleCurrentProductError()))

}



// MEN PRODUCT K

const menhandleLoading=(payload)=>({
    type:MEN_PRODUCT_LOADING,
    payload
})

const menhandleError=()=>({
    type:MEN_PRODUCT_ERROR
})

const menhandleSuccess=(payload)=>({
    type:MEN_PRODUCT_SUCCESS,
    payload

})

const getMenData = (payload) => (dispatch) => {

    dispatch(menhandleLoading())
      fetch( "https://gorgeous-plum-fedora.cyclic.app/products?gender=MEN",{
        params:{
            ...payload
        }
    })
    .then((res)=> res.json())
    .then((res)=> dispatch(menhandleSuccess(res)))                                          //pehle console.log(res)
    .catch(()=> dispatch(menhandleError()))

}




// Women PrOduct k liye

const womenhandleloading=(payload)=>({
    type: WOMEN_PRODUCT_LOADING,
    payload

})


const womenhandleError=()=>({
    type:WOMEN_PRODUCT_ERROR
})

const womenhandleSuccess=(payload)=>({
    type:WOMEN_PRODUCT_SUCCESS,
    payload

})

const getWomenData = () => (dispatch) => {

    dispatch(womenhandleloading())
    fetch("https://gorgeous-plum-fedora.cyclic.app/products?gender=WOMEN")
    .then((res)=> res.json())
    .then((res)=> dispatch(womenhandleSuccess(res)))                                          //pehle console.log(res)
    .catch(()=> dispatch(womenhandleError()))

}







export {getData,getCurrentProductData,getMenData,getWomenData}


// export {storeData,handleLoading,handleError, getData,getCurrentProductData}