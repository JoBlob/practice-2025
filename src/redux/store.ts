import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { planetSlice } from './features/planet/planetSlice'
import { peopleSlice } from './features/people/peopleSlice'
import { counterSlice } from './features/counter/counterSlice'
import { composeWithDevTools } from '@redux-devtools/extension'
import { thunk } from 'redux-thunk'


const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

export const store = configureStore({
    reducer: {
        planets: planetSlice.reducer,
        people: peopleSlice.reducer,
        counter: counterSlice.reducer,
    },


})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store