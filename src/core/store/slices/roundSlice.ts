import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IRoundSlice {
	roundNumber: number;
}

const initialState = {
	roundNumber: 1
} as IRoundSlice;

const roundSlice = createSlice({
	name: "alert",
	initialState,
	reducers: {
		setRound(state, action: PayloadAction<{ roundNumber: number }>) {
			state.roundNumber = action.payload.roundNumber;
		}
	}
})

export const {
	setRound
} = roundSlice.actions;

export default roundSlice.reducer;