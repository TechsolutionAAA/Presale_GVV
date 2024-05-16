import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userSlice {
    loading: boolean;
}

const initialState = {
    loading: false
} as userSlice;

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    }
});

export default userSlice.reducer;