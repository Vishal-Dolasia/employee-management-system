import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeslice";
import {persistStore,persistReducer} from "redux-persist"
import storageImport from "redux-persist/lib/storage";

const storage = storageImport.default;

console.log(storage);


const persistConfig = {
  key : 'root',
  storage,
}
const persistedReducer = persistReducer(
  persistConfig,
  employeeReducer
);

export const store = configureStore({
  reducer: {
    employee: persistedReducer,
  },
});
export const persistor = persistStore(store);