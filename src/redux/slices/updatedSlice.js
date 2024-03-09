import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  isLoading: false,
  isError: false,
};

const updatedSlice = createSlice({
  name: "updated",
  initialState,
  reducers: {},
});

export default updatedSlice.reducer;
