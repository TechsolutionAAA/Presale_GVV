import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModalSlice {
	showSignUpModal: boolean;
	showSignInModal: boolean;
	showLateralMenu: boolean;
	showBuyWithModal: boolean;
}

const initialState = {
	showSignUpModal: false,
	showSignInModal: false,
	showLateralMenu: false,
	showBuyWithModal: false,
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
		},
		setShowBuyWithModalAction(state, action: PayloadAction<boolean>) {
			state.showSignInModal = action.payload
		},
		setShowLateralMenu(state, action: PayloadAction<boolean>) {
		  state.showLateralMenu = action.payload;
		},
	},
});

export const {
	setShowSignUpModalAction,
	setShowSignInModalAction,
	setShowBuyWithModalAction,
	setShowLateralMenu,
} = modalSlice.actions;

export default modalSlice.reducer;