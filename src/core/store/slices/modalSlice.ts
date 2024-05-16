import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModalSlice {
	showSignUpModal: boolean;
	showSignInModal: boolean;
}

const initialState = {
	showSignUpModal: false,
	showSignInModal: false
} as IModalSlice;

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		setShowSignUpModalAction(state, action: PayloadAction<boolean>) {
			state.showSignUpModal = action.payload
		},
		setShowSignInModalAction(state, action: PayloadAction<boolean>) {
			state.showSignInModal = action.payload
		}
	},
});

export const {
	setShowSignUpModalAction,
	setShowSignInModalAction
} = modalSlice.actions;

export default modalSlice.reducer;