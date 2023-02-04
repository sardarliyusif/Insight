import { configureStore } from '@reduxjs/toolkit'
import insightReducer from './features/insightSlice'

export const store = configureStore({
  reducer: {
    insight: insightReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch