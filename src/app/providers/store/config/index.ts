import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter/model';

const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
	devTools: IS_DEV
});

export function createStore() {
	return store;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;