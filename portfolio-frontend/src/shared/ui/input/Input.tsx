import { ChangeEventHandler, memo } from 'react';
import { cn } from 'shared/lib/classNames';
import s from './input.module.scss';

type HTMLInputProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	'onChange' | 'value'
>;

interface IProps extends HTMLInputProps {
	className?: string;
	value?: string;
	type?: HTMLInputProps['type'];
	onChange?: (v: string) => void;
}
export const Input: React.FC<IProps> = memo((props) => {
	const {
		type = 'text',
		className = '',
		onChange,
		value,
		...restProps
	} = props;
	const onLocalChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const value = e.target.value;
		onChange?.(value);
	};
	return (
		<div className={cn(s.inputWrapper, { [className]: !!className })}>
			<div className={s.cursor}></div>
			<input
				type={type}
				value={value}
				onChange={onLocalChange}
				className={s.input}
				{...restProps}
			/>
		</div>
	);
});

Input.displayName = 'Input';
