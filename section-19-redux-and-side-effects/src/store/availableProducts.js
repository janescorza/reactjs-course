import {createSlice} from '@reduxjs/toolkit'


const initialAvailableItems = {
    availableProducts: [{
        id:1,
        title:'Test',
        price:6,
        description:'This is a first product - amazing!'
    },
    {
        id:2,
        title:'Test2',
        price:62,
        description:'This is a second product - amazing!'
    },
    {
        id:3,
        title:'Test3',
        price:63,
        description:'This is a third product - amazing!'
    }
]
}
const productsSlice = createSlice({
    name:"availableProducts",
    initialState:initialAvailableItems,
    reducers: {
        addItems(){}
    }
})
export const productsSliceActions = productsSlice.actions;

export default productsSlice.reducer;