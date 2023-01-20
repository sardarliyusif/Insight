import { configureStore } from '@reduxjs/toolkit'
import insightReducer from './features/insight/insightSlice'

export const store = configureStore({
  reducer: {
    insight: insightReducer,
  },
})