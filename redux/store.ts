import { configureStore } from "@reduxjs/toolkit";
import componentsSlice from "./componentsSlice";

export const store = configureStore({
	reducer: {
		components: componentsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;