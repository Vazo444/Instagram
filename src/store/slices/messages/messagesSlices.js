import { createSlice } from "@reduxjs/toolkit";

const messagesSlices = createSlice({
    name: 'messeges',
    initialState: {
        currentDialog: {},
        activeUserId: '',
        allMesseges: []
    },
    reducers: {
        getActive(state, {payload}){
            return {
                ...state,
                activeUserId: payload.toId,
                currentDialog: {
                    ...payload
                },
            }
        },
        getLetter(state, {payload}) {
            return {
                ...state,
                currentDialog: {
                    ...state.currentDialog,
                    txt: payload,
                    id: new Date().getTime().toString()
                }
            }
        },
        resetLetter(state, {payload}) {
            return {
                ...state,
                currentDialog: {
                    ...state.currentDialog,
                    txt: '',
                    id: new Date().getTime().toString()
                }
            }
        },
        sendToAllMess(state, {payload}){
            return {
                ...state,
                allMesseges: [
                    ...state.allMesseges,
                    {
                        ...state.currentDialog
                    }
                ]
            }
        },
        resetActiveUserId(state, {payload}){
            return {
                ...state,
                activeUserId: '',
                currentDialog: {}
            }
        }
    }
})

export const selectMesseges = state => state.messeges

export const { getActive, getLetter, resetLetter, sendToAllMess, resetActiveUserId } = messagesSlices.actions

export const messegesReducer = messagesSlices.reducer