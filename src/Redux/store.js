// import {create_legacyStore} from "redux"
import { legacy_createStore } from "redux";

import { productReducer } from "./Products/reducer";

const store = legacy_createStore(productReducer)

export {store} 