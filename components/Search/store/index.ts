import { createSlice, configureStore } from '@reduxjs/toolkit';

const packageSlice = createSlice({
	name : 'package',
	initialValue : {
		value : ''
	},
	reducer : {
		changePackage : (state, action) => {
			state.value = action.value;
		}
	}
});

const store = configureStore({
	reducer : packageSlice.reducer
});

export default store;

