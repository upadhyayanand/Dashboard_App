import { configureStore } from "@reduxjs/toolkit";
import widgetsReducer from "./dashboard/widgetsSlice";
import modalVisibilityReducer from "./dashboard/modalVisibilitySlice";

const store = configureStore({
  reducer: {
    categories: widgetsReducer,
    modalVisibility: modalVisibilityReducer,
  },
});

export default store;
