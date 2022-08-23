import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './mapSet'

export const store = configureStore({
  reducer: {
    setCord: counterReducer,

  },
})
export default store