import {createSlice} from '@reduxjs/toolkit'

 export const planetSlice = createSlice({
	name: 'planet',
	initialState:{
		planets: [],
		isLoading: false,
		error: null
	},
	reducers:{
		setPlanets: (state, action) => {
			state.planets = action.payload;
			state.isLoading = false;
			state.error = null;
		}
	}
})

export const {setPlanets} = planetSlice.actions

export default planetSlice.reducer