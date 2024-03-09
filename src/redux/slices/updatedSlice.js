import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../action";

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
};

const updatedSlice = createSlice({
  name: "updated",
  initialState,

  // thunk aksiyonun calistirdigi "pending/ fufilled /rejected" erismek
  // ve bu aksiyonlarin state guncelleyecegini
  // soylemek icin extraReducers kullanilmali
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export default updatedSlice.reducer;
