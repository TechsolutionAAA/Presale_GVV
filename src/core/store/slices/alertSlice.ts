import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAlertProps } from "../../../components/alert/AlertComponent";

interface IAlertSlice {
	showAlert: boolean;
	alertProps: IAlertProps;
}

const initialState = {
	showAlert: false,
} as IAlertSlice;

const alertSlice = createSlice({
	name: "alert",
	initialState,
	reducers: {
		setShowAlertAction(state, action: PayloadAction<{ showAlert: boolean, props?: IAlertProps }>) {
			state.showAlert = action.payload.showAlert;
			if (action.payload.props) {
				state.alertProps = action.payload.props;
			}
		}
	}
})

export const {
	setShowAlertAction
} = alertSlice.actions;

export default alertSlice.reducer;