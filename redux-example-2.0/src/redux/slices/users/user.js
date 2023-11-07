import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //estas son las actions
    setUserList: (state, action) => {
      state.list = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

export const fetchAllUsers = () => (dispatch) => {
  axios("https://reqres.in/api/users?per_page=12")
    .then((resp) => dispatch(setUserList(resp.data.data)))
    .catch((error) => console.log(error));
};
