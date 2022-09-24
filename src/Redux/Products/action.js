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





export {handeLoading,handleError,storeData}