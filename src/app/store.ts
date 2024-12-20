import { configureStore } from '@reduxjs/toolkit';
import navLinksSlice from './features/navlink-dashboard/navlinksSlice';
import languageSlice from './features/languages/langSlice';
// ...

export const store = configureStore({
  reducer: {
    navLinks: navLinksSlice,
    language: languageSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
