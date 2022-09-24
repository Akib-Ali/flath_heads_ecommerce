const handeLoading=(payload)=>({
    type:"IS_LOADING",
    payload
})


const handleError=()=>({
    type:"IS_ERROR"
})

const storeData=(payload)=>({
    type:"STORE_DATA",
    payload
})


// add thunk

const getData = () => (dispatch) => {

        dispatch(handeLoading())
        fetch("https://doctor-patient123.herokuapp.com/products")
        .then((res)=> res.json())
        .then((res)=> dispatch(storeData(res)))                                          //pehle console.log(res)
        .catch(()=> dispatch(handleError()))

}





export {storeData,handeLoading,handleError, getData}