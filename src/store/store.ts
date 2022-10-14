import { configureStore } from '@reduxjs/toolkit'
import uiSlice from '../slices/uiSlice';
import modalSlice from '../slices/modalSlice';

// ...

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    modal: modalSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;