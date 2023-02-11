import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/login/loginSlices";
import { messegesReducer } from "./slices/messages/messagesSlices";
import { postsReducer } from "./slices/posts/postsSlicec";
import { searchReducer } from "./slices/search/searchSlices";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

const ignorEmptyComment = store => next => action => {
    if((action.type === 'posts/addComent' && !action.payload.body.replaceAll(' ', ''))){
        return
    }
    next(action)
}

const searchLowerCase = store => next => action => {
    if(action.type === 'search/searchPosts'){
        action.payload = action.payload.toLowerCase()
    }
    next(action)
}

const ignoreEmptyLetter = store => next => action => {
    if((action.type === 'messeges/getLetter' && !action.payload.replaceAll(' ', ''))){
        return
    }
    next(action)
}

const persistConfig = {
    key: 'fantastikinstagraam',
    storage,
}

const rootReduser = combineReducers({
    posts: postsReducer,
    search: searchReducer,
    login: loginReducer,
    messeges: messegesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReduser)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return [...getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        }), ignoreEmptyLetter, searchLowerCase, ignorEmptyComment]
    }
})

export const persister = persistStore(store)

export default store