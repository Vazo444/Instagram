import { createSlice } from "@reduxjs/toolkit";
import { fetchLogin } from "./loginAPI";

const loginSlices = createSlice({
    name: 'login',
    initialState: {
        users: [],
        currentUser: null
    },
    reducers: {
        logCurrentUser(state, {payload}){
            const initialUser = state.users.find(user => (user.username === payload.login || user.email === payload.login) && user.password === payload.password)
            state.currentUser = initialUser || null
        },
        logOutUser(state, {payload}){
            state.currentUser = null
        },
        addPost(state, {payload}){
            const initialUser = state.users.find(user => user.id === state.currentUser.id)
            initialUser.images.unshift({...payload})
            state.currentUser.images.unshift({...payload})
        },
        delPostL(state, {payload}){
            const idxUser = state.users.findIndex(user => user.id === state.currentUser.id)
            const idxImg = state.currentUser.images.findIndex(img => img.id === payload)

            state.currentUser.images.splice(idxImg, 1)
            state.users[idxUser].images.splice(idxImg, 1)
        }
    },
    extraReducers: {
        [fetchLogin.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                users: payload
            }
        }
    }
})

export const selectLogin = state => state.login

export const { logCurrentUser, logOutUser, addPost, delPostL } = loginSlices.actions

export const loginReducer = loginSlices.reducer