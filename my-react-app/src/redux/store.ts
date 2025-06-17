import { configureStore } from '@reduxjs/toolkit'
import { planetSlice } from './slices/planetSlice'
import { peopleSlice } from './slices/peopleSlice'

export const store = configureStore({
    reducer: {
        planets: planetSlice.reducer,
        pleope: peopleSlice.reducer
    }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store