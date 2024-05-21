import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IRoundSlice {
	roundNumber: number;
	amount: number;
}

const initialState = {
	roundNumber: 1,
	amount: 0
} as IRoundSlice;

const roundSlice = createSlice({
	name: "alert",
	initialState,
	reducers: {
		setRound(state, action: PayloadAction<{ roundNumber: number }>) {
			state.roundNumber = action.payload.roundNumber;
		},
		setAmount(state, action: PayloadAction<{ amount: number }>) {
			state.amount = action.payload.amount;
		}
	}
})

export const {
	setRound,
	setAmount
} = roundSlice.actions;

export default roundSlice.reducer;