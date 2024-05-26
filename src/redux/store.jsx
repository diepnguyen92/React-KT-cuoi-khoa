import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slice/cart.jsx'

export const store = configureStore({
  reducer: {
    cart: counterReducer

  },
})