import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createStore, RootState } from "../config";

interface IStoreProviderProps {
	children: ReactNode;
	preloadedState?: RootState;
}
export const StoreProvider: React.FC<IStoreProviderProps> = ({ children, preloadedState }) => {
	const store = createStore(preloadedState);
	return <Provider store={store}>{ children }</Provider>;
};