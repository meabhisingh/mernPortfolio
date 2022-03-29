import { configureStore } from "@reduxjs/toolkit";
import { loginReducer, updateReducer, userReducer } from "./reducers/user";

const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    update: updateReducer,
  },
});

export default store;
