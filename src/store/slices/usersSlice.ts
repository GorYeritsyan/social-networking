import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UsersInitState, UsersResponse } from "../../types/types";
import { UsersAPI } from "../../api/api";

export const fetchUsers = createAsyncThunk<UsersResponse, number, {}>(
    'fetchUsers',
    async (page) => {
        const res = await UsersAPI.getUsers(page)
        return res.data
    }
)

const initialState: UsersInitState = {
    users: [],
    page: 1
}

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        addMoreUsers(state){
            state.page += 1
        },
        resetUsers(state){
            state.users = [],
            state.page = 1
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = [...state.users, ...action.payload.items]
        })
    }
})

export const {addMoreUsers, resetUsers} = usersSlice.actions

export default usersSlice.reducer