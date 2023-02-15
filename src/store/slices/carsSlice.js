import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "car",
    initialState: {
        searchTerm: "",
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addCar(state, action) {
            state.cars.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            })
        },
        deleteCar(state, action) { 
            const updatedCarsList = state.cars.filter((car) => { 
                return car.id !== action.payload
            })
            state.cars = updatedCarsList
        }

    }
})

export const { changeSearchTerm, addCar, deleteCar } = carsSlice.actions
export const carsReducer = carsSlice.reducer