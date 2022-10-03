import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import {store} from "./Redux/store"

{/*iind*/}
import axios from "axios";
axios.defaults.baseURL = "https://doctor-patient123.herokuapp.com/products"                                                 
axios.defaults.headers.post["Content-Type"] = "application/json"

{/*iind*/}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ChakraProvider>
      <Provider store={store}>
      <BrowserRouter>

      <App />
      </BrowserRouter>
     </Provider>
          </ChakraProvider>

  </React.StrictMode>
)
