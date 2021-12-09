import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ILaunchPicker {
  launchName: string
  launchArticle: string
  launchVideo: string
  launchImage: string
}

const initialState = {
  launchName: '',
  launchArticle: '',
  launchVideo: '',
  launchImage: '',
} as ILaunchPicker

export const launchPickerSlice = createSlice({
  name: 'launchPicker',
  initialState,
  reducers: {
    whichLaunch: (state, action: PayloadAction<string>) => {
      state.launchName = action.payload
    },
    articleLink: (state, action: PayloadAction<string>) => {
      state.launchArticle = action.payload
    },
    videoID: (state, action: PayloadAction<string>) => {
      state.launchVideo = action.payload
    },
    imageLink: (state, action: PayloadAction<string>) => {
      state.launchImage = action.payload
    },
  }
})

export const { whichLaunch, videoID, articleLink, imageLink } = launchPickerSlice.actions

export default launchPickerSlice.reducer