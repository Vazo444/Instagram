import { createSlice } from "@reduxjs/toolkit";

const searchSlices = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        searchPosts(state, {payload}){
            return payload
        },
        resetSearch() {
            return ''
        }
    }
})

export const selectSearch = state => state.search

export const { searchPosts, resetSearch } = searchSlices.actions

export const searchReducer = searchSlices.reducer