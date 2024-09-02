import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createStore } from "../config";

interface IStoreProviderProps {
  children: ReactNode;
}
export const StoreProvider: React.FC<IStoreProviderProps> = ({ children }) => {
	const store = createStore();
	return <Provider store={store}>{ children }</Provider>;
};