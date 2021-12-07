import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISearchState {
  query: string
}

const initialState = { 
  query: '',
} as ISearchState

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    }
  }
})

export const { search } = searchSlice.actions

export default searchSlice.reducer