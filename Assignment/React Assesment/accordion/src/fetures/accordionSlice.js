import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openAccordion: [], // Supports multiple and Initially, it's empty → no section is open.
};

export const accordionSlice = createSlice({
  name: "accordion",
  initialState,

  reducers: {
    toggleAccordion: (state, action) => {
      // Business Logic: Toggle accordion index
      const index = action.payload;
      if (state.openAccordion.includes(index)) {
        // Remove it (close)
        state.openAccordion = state.openAccordion.filter((i) => i !== index);
      } else {
        // Add it (open)
        state.openAccordion.push(index);
      }
      console.log("Open sections:", state.openAccordion);
    },
  },
});

export const { toggleAccordion } = accordionSlice.actions;
export default accordionSlice.reducer;
