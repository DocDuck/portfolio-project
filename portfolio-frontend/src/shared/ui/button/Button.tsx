import { cn } from 'shared/lib/classNames';
import s from './button.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	mode?: 'clean' | 'border' | 'filled';
	size?: 's' | 'm' | 'l';
	isDisabled?: boolean;
}
export const Button: React.FC<IProps> = (props) => {
	const {
		mode = 'filled',
		size = 'm',
		className = '',
		isDisabled = false,
		children,
		...restProps
	} = props;
	return (
		<button
			disabled={isDisabled}
			className={cn(s.button, s[mode], s[size], {
				[className]: !!className,
				[s.disabled]: isDisabled,
			})}
			{...restProps}
		>
			{children}
		</button>
	);
};

Button.displayName = 'Button';
