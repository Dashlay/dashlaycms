import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
		addComponent: (state, action: PayloadAction<String>) => {
			// Find component in registeredComponents
			try {
				const component = state.registeredComponents[action.payload];

				state.usedComponents.push({
					namespace: action.payload,
					...component,
				});
			} catch (error) {
				console.error("Something went wrong", error);
			}

			// Push to usedComponents
		},
		updateComponent: (state, action) => {},
		removeComponent: (state, action) => {
			console.log(action.payload);
			state.usedComponents = state.usedComponents.filter(
				(val, index) => index !== action.payload
			);
		},
	},
});

export const { addComponent, updateComponent, removeComponent } =
	componentSlice.actions;

export const getRegisteredComponents = (state) =>
	Object.keys(state.components.registeredComponents);

export const getUsedComponents = (state) => state.components.usedComponents;

export default componentSlice.reducer;
