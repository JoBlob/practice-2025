import { createSlice } from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
	name: "people",
	initialState: {
		people: [],
		isLoading: false,
		error: null,
	},
	reducers: {
		fetchingPeople: (state) => {
			state.isLoading = true;
		},
		fetchPeopleSuccess: (state, action) => {
			state.people = action.payload;
			state.isLoading = false;
		},
		fetchPeopleFail: (state, action) => {
			state.error = action.payload;
			state.isLoading = false
		},
	},
})

export const { fetchingPeople, fetchPeopleSuccess, fetchPeopleFail } = peopleSlice.actions;
export default peopleSlice;	