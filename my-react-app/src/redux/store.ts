import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { planetSlice } from './slices/planetSlice'
import { peopleSlice } from './slices/peopleSlice'
import { composeWithDevTools } from '@redux-devtools/extension'
import { thunk } from 'redux-thunk'


const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

export const store = configureStore({
    reducer: {
        planets: planetSlice.reducer,
        people: peopleSlice.reducer
    },
composedEnhancer: composedEnhancer
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store