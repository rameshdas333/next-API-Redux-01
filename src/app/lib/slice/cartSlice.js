import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: []
  },
  reducers: {
    addToCart: (state,action) => {
 
  const findIndex = state.value.findIndex((item )=> item.id == action.payload.id)
  console.log(findIndex)
  if(findIndex >= 0){
    state.value[findIndex].quentity += 1;
  }else{
    state.value.push({...action.payload,quentity: 1});
  }
    
    },

  }
})

// Action creators are generated for each case reducer function
export const { increment ,addToCart} = cartSlice.actions

export default cartSlice.reducer