import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: []
  },
  reducers: {
    addToCart: (state,action) => {
    
 
  const findIndex = state.value.findIndex((item )=> item.id == action.payload.id)
  console.log(findIndex,"ram")
  if(findIndex >= 0){
    state.value[findIndex].quantity += 1;
  }else{
    state.value.push({...action.payload, quantity: 1});
  }
    
    },

  }
})

// Action creators are generated for each case reducer function
export const { addToCart} = cartSlice.actions

export default cartSlice.reducer