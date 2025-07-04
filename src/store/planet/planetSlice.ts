import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchPlanets = createAsyncThunk('https://swapi.info/api/planets', async () => {
	const response = await fetch('https://swapi.info/api/planets')
	.then((res) => res.json())
	.catch((e) => {
		console.error(`Error fetching planets: ${e.message}`);
		throw e;
	});
	return response.results;
})

 export const planetSlice = createSlice({
	name: 'planets',
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

export default planetSlice