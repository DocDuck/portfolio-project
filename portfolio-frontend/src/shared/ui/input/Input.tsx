import {
	ChangeEventHandler,
	memo,
	ReactEventHandler,
	useEffect,
	useRef,
	useState,
} from 'react';
import { cn } from 'shared/lib/classNames';
import s from './input.module.scss';

type HTMLInputProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	'onChange' | 'value'
>;

interface IProps extends HTMLInputProps {
	className?: string;
	value?: string;
	placeholder?: string;
	autofocus?: boolean;
	type?: HTMLInputProps['type'];
	onChange?: (v: string) => void;
}
export const Input: React.FC<IProps> = memo((props) => {
	const {
		type = 'text',
		className = '',
		onChange,
		value,
		placeholder = '',
		autofocus = false,
		...restProps
	} = props;
	const [isFocused, setIsFocused] = useState(false);
	const [caretPostiton, setCaretPostiton] = useState(0);
	const inputRef = useRef<HTMLInputElement>(null);
	const onLocalChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const value = e.target.value;
		setCaretPostiton(value.length);
		onChange?.(value);
	};
	const onLocalSelect: ReactEventHandler<HTMLInputElement> = (e) => {
		if (e.target instanceof HTMLInputElement) {
			setCaretPostiton(e.target.selectionStart ?? 0);
		}
	};
	useEffect(() => {
		autofocus && inputRef?.current?.focus();
	}, [autofocus, inputRef]);

	return (
		<div className={cn(s.container, { [className]: !!className })}>
			{placeholder ? <div className={s.placeholder}>{placeholder}</div> : null}
			<div className={cn(s.inputWrapper, { [s.grow]: !placeholder })}>
				{isFocused && (
					<div
						className={s.carret}
						style={
							caretPostiton
								? { left: `${caretPostiton * 10 + 10}px` }
								: undefined
						}
					/>
				)}
				<input
					ref={inputRef}
					className={s.input}
					type={type}
					value={value}
					onChange={onLocalChange}
					onSelect={onLocalSelect}
					onBlur={() => setIsFocused(false)}
					onFocus={() => setIsFocused(true)}
					{...restProps}
				/>
			</div>
		</div>
	);
});

Input.displayName = 'Input';
