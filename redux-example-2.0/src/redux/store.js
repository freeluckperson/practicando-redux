import { configureStore } from "@reduxjs/toolkit";

// reducers
import users from "./slices/users/user.js";

export const store = configureStore({
  reducer: {
    users,
  },
});
