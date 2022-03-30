import { combineReducers, configureStore } from "@reduxjs/toolkit"; 
import { persistReducer, persistStore} from "redux-persist";
// import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"; 

import pekerjaanSlice from "./pekerjaanSlice";

const reducers = combineReducers({
    pekerjaan : pekerjaanSlice 
}) 

const persistConfig = {
    key : 'root',
    storage
};
const persistedReducer = persistReducer (persistConfig, reducers) 
const kantor = configureStore ({reducer : persistedReducer}) 
const persistor = persistStore (kantor)

export {kantor, persistor}

