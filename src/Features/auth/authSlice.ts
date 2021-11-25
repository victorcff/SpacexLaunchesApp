import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  signedIn: boolean
}

const initialState = { 
  signedIn: false,
} as IAuthState

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggedIn: (state) => {
      state.signedIn = true; 
    },
    loggedOut: (state) => {
      state.signedIn = false;
    }
  }
})

export const { loggedIn, loggedOut } = authSlice.actions

export default authSlice.reducer