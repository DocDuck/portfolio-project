import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../../../../entities/counter'; // TODO fix abs path for jest

const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
	devTools: IS_DEV,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export function createStore(preloadedState?: RootState) {
	return preloadedState ? configureStore({
		reducer: {
			counter: counterReducer,
		},
		devTools: IS_DEV,
		preloadedState
	}) : store;
}
