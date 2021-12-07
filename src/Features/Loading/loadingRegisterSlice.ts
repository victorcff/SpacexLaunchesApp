import { createSlice } from "@reduxjs/toolkit";

export interface ILoadingRegisterState {
  isLoadingRegister: boolean
}

const initialState = { 
  isLoadingRegister: false,
} as ILoadingRegisterState

export const loadingRegisterSlice = createSlice({
  name: 'loadingRegister',
  initialState,
  reducers: {
    loadingRegisterNow: (state) => {
      state.isLoadingRegister = true;
    },
    notLoadingRegister: (state) => {
      state.isLoadingRegister = false;
    }
  }

})

export const { loadingRegisterNow, notLoadingRegister } = loadingRegisterSlice.actions

export default loadingRegisterSlice.reducer