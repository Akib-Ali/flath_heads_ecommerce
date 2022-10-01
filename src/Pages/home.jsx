 import {useSelector} from "react-redux"
export const Home=()=>{

    const data = useSelector((state) => state.products)


    // console.log(data)
    return(
        <h1>Home Page</h1>
    )
}