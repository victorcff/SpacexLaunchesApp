import { createSlice } from "@reduxjs/toolkit";

export interface ILoading {
  isLoading: boolean
}

const initialState = { 
  isLoading: false,
} as ILoading

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    loadingNow: (state) => {
      state.isLoading = true; 
    },
    notLoading: (state) => {
      state.isLoading = false;
    }
  }
})

export const { loadingNow, notLoading } = loadingSlice.actions

export default loadingSlice.reducer