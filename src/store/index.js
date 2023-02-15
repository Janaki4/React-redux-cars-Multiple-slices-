import { configureStore } from "@reduxjs/toolkit";

import {
    changeSearchTerm, addCar, deleteCar, carsReducer
} from "./slices/carsSlice";
import { changeName, changeCost, formReducer } from "./slices/formSlice";


const store = configureStore({
    reducer: {
        cars: carsReducer,
        form:formReducer
    }
})

export {store, changeCost,changeName ,changeSearchTerm ,addCar ,deleteCar}