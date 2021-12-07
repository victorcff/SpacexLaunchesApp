import { createSlice } from "@reduxjs/toolkit";

export interface ILoadingLoginState {
  isLoadingLogin: boolean
}

const initialState = { 
  isLoadingLogin: false,
} as ILoadingLoginState

export const loadingLoginSlice = createSlice({
  name: 'loadingLogin',
  initialState,
  reducers: {
    loadingLoginNow: (state) => {
      state.isLoadingLogin = true; 
    },
    notLoadingLogin: (state) => {
      state.isLoadingLogin = false;
    }
  }
})

export const { loadingLoginNow, notLoadingLogin } = loadingLoginSlice.actions

export default loadingLoginSlice.reducer