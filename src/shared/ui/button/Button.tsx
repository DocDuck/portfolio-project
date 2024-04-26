import { cn } from "shared/lib/class-names";
import s from "./button.module.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  mode?: 'clear' | 'border' | 'filled'
}
export const Button: React.FC<IProps> = (props) => {
	const { mode = 'clear', className = '', children, ...restProps } = props;
	return (
		<button className={cn(s.button, s[mode], { [className]: !!className })} {...restProps}>
			{children}
		</button>
	);
};

Button.displayName = "Button";