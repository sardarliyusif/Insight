import { configureStore } from '@reduxjs/toolkit'
import insightReducer from './features/insightSlice'

export const store = configureStore({
  reducer: {
    insight: insightReducer,
  },
})