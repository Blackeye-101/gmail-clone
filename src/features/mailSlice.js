import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMessageIsOpen: false,
  selectedMail: null,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    toggleSendMessage: (state) => {
      state.sendMessageIsOpen = !state.sendMessageIsOpen;
    },
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
  },
});

export const { selectMail, toggleSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
