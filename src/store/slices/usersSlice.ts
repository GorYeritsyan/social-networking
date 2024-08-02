import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UsersInitState, UsersResponse } from "../../types/types";
import { UsersAPI } from "../../api/api";

export const fetchUsers = createAsyncThunk<UsersResponse, void, {}>(
    'fetchUsers',
    async () => {
        const res = await UsersAPI.getUsers()
        return res.data
    }
)

const initialState: UsersInitState = {
    users: null
}

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload.items
        })
    }
})

export default usersSlice.reducer