import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMessageIsOpen: false,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    toggleSendMessage: (state) => {
      state.sendMessageIsOpen = !state.sendMessageIsOpen;
    },
  },
});

export const { toggleSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
