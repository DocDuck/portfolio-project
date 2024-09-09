import { ChangeEventHandler, memo, useState } from 'react';
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
		...restProps
	} = props;
	const [isFocused, setIsFocused] = useState(false);
	const onLocalChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const value = e.target.value;
		onChange?.(value);
	};
	return (
		<div className={cn(s.container, { [className]: !!className })}>
			{placeholder ? <div className={s.placeholder}>{placeholder}</div> : null}
			<div className={cn(s.inputWrapper, { [s.grow]: !placeholder })}>
				{isFocused && <div className={s.carret} />}
				<input
					type={type}
					value={value}
					onChange={onLocalChange}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					className={s.input}
					{...restProps}
				/>
			</div>
		</div>
	);
});

Input.displayName = 'Input';
