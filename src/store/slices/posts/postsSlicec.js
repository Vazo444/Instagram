import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postAPI";

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addComent(state, {payload}){
            
            const idx = state.findIndex(post => post.id === payload.id)
            state[idx].comments.unshift({
                id: new Date().getTime().toString(),
                name: payload.name,
                body: payload.body
            })
        },
        addPost(state, {payload}){
            state.unshift(payload)
        },
        delPost(state, {payload}){
            const idx = state.findIndex(post => post.id === payload)
            state.splice(idx, 1)
        }
    },
    extraReducers: {
        [fetchPosts.fulfilled]: (state, {payload}) => {
            return [...payload]
        }
    }
})

export const selectPosts = state => state.posts

export const { addComent, addPost, delPost } = postsSlice.actions

export const postsReducer = postsSlice.reducer