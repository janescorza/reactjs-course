
import {configureStore} from '@reduxjs/toolkit'
import cartItemsReducer from './cartItems'

const store = configureStore({reducer:{
    cartItems: cartItemsReducer,
}})

export default store;