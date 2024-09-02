import { useAppDispatch, useAppSelector } from "shared/hooks/store";
import { Button } from "shared/ui/button";
import { getCounterValue } from "../model/selectors/counterSelectors";
import { counterActions } from "../model";

export const Counter = () => {
	const dispatch = useAppDispatch();
	const count = useAppSelector(getCounterValue);

	const onIncrement = () => {
		dispatch(counterActions.increment());
	};
	const onDecrement = () => {
		dispatch(counterActions.decrement());
	};
	return (
		<div>
			<div className="count">{`Count:${count}`}</div>
			<Button onClick={onIncrement}>+</Button>
			<Button onClick={onDecrement}>-</Button>
		</div>
	);
};