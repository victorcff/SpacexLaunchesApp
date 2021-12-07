import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../Features/auth/authSlice'
import loadingLoginReducer from '../Features/Loading/loadingLoginSlice'
import loadingRegisterReducer from '../Features/Loading/loadingRegisterSlice'
import loadingReducer from '../Features/Loading/loadingSlice'
import launchPickerReducer from '../Features/LaunchPicker/launchPickerSlice'
import searchReducer from '../Features/Search/searchSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    loadingLogin: loadingLoginReducer,
    loadingRegister: loadingRegisterReducer,
    launchPicker: launchPickerReducer,
    search: searchReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
