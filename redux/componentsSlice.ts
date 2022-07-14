import { createSlice } from "@reduxjs/toolkit";

/**
 * Components structure
 *
 * {
 *  namespace: '[developerId]/[componentName],
 *  content: {} // Populates all fields of the component
 * }
 */

export const componentSlice = createSlice({
	name: "componentsSlice",
	initialState: [{ test: "Hello" }],
	reducers: {
		addComponent: (state, action) => {},
		updateComponent: (state, action) => {},
		removeComponent: (state, action) => {},
	},
});

export const { addComponent, updateComponent, removeComponent } =
	componentSlice.actions;

export const getAllComponents = (state) => state.components;

export default componentSlice.reducer;
