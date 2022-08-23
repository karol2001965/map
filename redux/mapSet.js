import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cordinate: [56.505,-0.09],
}

export const counterSlice = createSlice({
  name: 'setCord',
  initialState,
  reducers: {
    setCord: (state, cords) => {
      state.cordinate = cords.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCord } = counterSlice.actions

export default counterSlice.reducer