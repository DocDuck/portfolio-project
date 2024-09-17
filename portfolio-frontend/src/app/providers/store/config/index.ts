import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { counterSlice } from 'entities/counter';
import { userSlice } from 'entities/user';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LazyLoadedSlices {}

export const reducer =
	combineSlices(
		counterSlice,
		userSlice,
	).withLazyLoadedSlices<LazyLoadedSlices>();

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
