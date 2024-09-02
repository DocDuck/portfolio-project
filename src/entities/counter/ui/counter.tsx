import { getCounterValue } from "../model/selectors/counterSelectors";
import { counterActions } from "../model";
import { useAppDispatch, useAppSelector } from "shared/hooks/store";
import { Button } from "shared/ui/button";

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
			<div data-testid="test-counter">{`Count:${count}`}</div>
			<Button data-testid="test-increment" onClick={onIncrement}>+</Button>
			<Button data-testid="test-decrement" onClick={onDecrement}>-</Button>
		</div>
	);
};