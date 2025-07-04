import axios from "axios";
import * as actions from "./actions";

const api = ({dispatch}:any) => (next:any) => async (action:any) => {
	if(action.type !== actions.API_IS_LOADING.type) {
			return next(action)
	}
	const {url, method, data, onStart, onSuccess, onError} = action.payload;

	if(onStart) {
		dispatch({type: onStart}) 
		next(action);
	}

	try {
		const response = await axios.request({
			baseURL: "https://swapi.info/api/",
			url,
			method,
			data,
		});
		// General
		dispatch(actions.API_IS_LOADING(response.data));
		// Specific
		if (onSuccess)
			dispatch({ type: onSuccess, payload: response.data });
	} catch (error: any) {
		// General
		dispatch(actions.API_ERROR(error.message));
		// Specific
		if (onError) dispatch({ type: onError, payload: error.message });
	}
}

export default api