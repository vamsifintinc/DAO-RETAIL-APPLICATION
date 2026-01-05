import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // QUESTIONS
  soleProprietor: null,       // true | false
  existingCustomer: null,    // true | false

  // FORM DATA
  email: "",
  phone: "",
  confirmPhone: "",
  isESignAccepted: false,
};

const getStartedSlice = createSlice({
  name: "Getstarted",
  initialState,
  reducers: {
    setSoleProprietor(state, action) {
      state.soleProprietor = action.payload;
    },
    setExistingCustomer(state, action) {
      state.existingCustomer = action.payload;
    },
    saveFormData(state, action) {
      const { email, phone, confirmPhone, isESignAccepted } = action.payload;
      state.email = email;
      state.phone = phone;
      state.confirmPhone = confirmPhone;
      state.isESignAccepted = isESignAccepted;
    },
    resetGetStarted() {
      return initialState;
    },
  },
});

export const getStartedActions = getStartedSlice.actions;
export default getStartedSlice.reducer;
