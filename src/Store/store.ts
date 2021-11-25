import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../Features/auth/authSlice'
import loadingReducer from '../Features/Loading/loadingSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
