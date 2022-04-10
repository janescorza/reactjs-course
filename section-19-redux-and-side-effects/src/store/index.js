
import {configureStore} from '@reduxjs/toolkit'
import cartItemsReducer from './cartItems'
import productsReducer from './availableProducts'
import cartReducer from './cart'

const store = configureStore({reducer:{
    cartStatus: cartReducer,
    cartItems: cartItemsReducer,
    products: productsReducer
}})

export default store;