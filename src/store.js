import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";
import userSlice from "./slices/userSlice";

export default configureStore({
  reducer: {
    game: gameReducer,
    user: userSlice,
  },
});
