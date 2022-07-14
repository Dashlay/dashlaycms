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
	initialState: {
		registeredComponents: {
			"philip/fullImage": {
				componentName: "Full Image",
				imageUrl: "",
				topHeadline: "",
				headline: "",
				bodyText: "",
				ctaText: "",
			},
		},
		usedComponents: [],
	},
	reducers: {
		addComponent: (state, action) => {
			state.usedComponents.push(action.payload);
		},
		updateComponent: (state, action) => {},
		removeComponent: (state, action) => {},
	},
});

export const { addComponent, updateComponent, removeComponent } =
	componentSlice.actions;

export const getRegisteredComponents = (state) =>
	Object.keys(state.components.registeredComponents);

export const getUsedComponents = (state) => state.components.usedComponents;

export default componentSlice.reducer;
