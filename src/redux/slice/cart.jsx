import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartArr: []
}

export const counterSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state,action) => {
     const productIndex = state.cartArr.find((item)=> item.id === action.payload.id)
     if(productIndex){
        alert('sản phẩm đã tồn tại')

      productIndex.quantity +=1
     }
     else {
       state.cartArr.push({...action.payload,quantity: 1 });
     }
    },
    deleteproduct: (state,action) => {
        state.cartArr = state.cartArr.filter(item => item.id !==action.payload)
     
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, deleteproduct } = counterSlice.actions

export default counterSlice.reducer