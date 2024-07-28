import { cn } from "shared/lib/classNames";
import s from "./button.module.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  mode?: 'clean' | 'border' | 'filled'
}
export const Button: React.FC<IProps> = (props) => {
	const { mode = 'filled', className = '', children, ...restProps } = props;
	return (
		<button className={cn(s.button, s[mode], { [className]: !!className })} {...restProps}>
			{children}
		</button>
	);
};

Button.displayName = "Button";