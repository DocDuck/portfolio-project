import { RootState } from "app/providers/store";

export const getCounterValue = (state: RootState) => state.counter?.value;