import { cn } from "shared/lib/classNames";
import s from "./button.module.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
	mode?: 'clean' | 'border' | 'filled';
	size?: 's' | 'm' | 'l'
}
export const Button: React.FC<IProps> = (props) => {
	const { mode = 'filled', size = 'm', className = '', children, ...restProps } = props;
	return (
		<button className={cn(s.button, s[mode], s[size], { [className]: !!className })} {...restProps}>
			{children}
		</button>
	);
};

Button.displayName = "Button";