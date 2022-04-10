import {createSlice} from '@reduxjs/toolkit'


const initialAvailableItems = {
    products: [{
        id:1,
        title:'Test',
        price:6,
        escription:'This is a first product - amazing!'
    },
    {
        title:'Test2',
        price:62,
        escription:'This is a second product - amazing!'
    },
    {
        title:'Test3',
        price:63,
        escription:'This is a third product - amazing!'
    }
]
}
const productsSlice = createSlice({
    name:"availableProducts",
    initialState:initialAvailableItems,
    reducers: {
    }
})

export default productsSlice.reducer;