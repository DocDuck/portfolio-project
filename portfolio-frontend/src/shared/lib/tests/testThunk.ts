import { AsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "app/providers/store";

export class TestThunk<Returned, Args, RejectedValue> {
	public dispatch: AppDispatch;
	public getState: () => RootState;
	private thunk:  AsyncThunk<Returned, Args, { rejectValue: RejectedValue }>;
	constructor(thunk: AsyncThunk<Returned, Args, { rejectValue: RejectedValue }>) {
		this.thunk = thunk;
		this.dispatch = jest.fn();
		this.getState = jest.fn();
	}

	async exec(args: Args) {
		const action = this.thunk(args);
		const result = await action(this.dispatch, this.getState, undefined);
		return result;
	}
}