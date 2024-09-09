import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';

const reducer = {
	counter: counterReducer,
	user: userReducer,
};

const store = configureStore({
	reducer,
	devTools: IS_DEV,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export function createStore(preloadedState?: RootState) {
	return preloadedState ? configureStore({
		reducer,
		devTools: IS_DEV,
		preloadedState
	}) : store;
}
