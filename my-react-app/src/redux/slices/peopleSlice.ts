import { createSlice } from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
	name: "people",
	initialState: {
		people: [],
		isLoading: false,
		error: null,
	},
	reducers: {
		setPeople: (state, action) => {
			state.people = action.payload;
			state.isLoading = false;
			state.error = null;
		},
		setLoading: (state, action) => {
			state.isLoading = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
			},
	},
})

export const { setPeople, setLoading, setError } = peopleSlice.actions;
export default peopleSlice.reducer;	