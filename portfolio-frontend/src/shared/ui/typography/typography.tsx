import { createElement, CSSProperties, ReactNode } from 'react';
import { cn } from 'shared/lib/classNames';
import s from './typography.module.scss';

type TagVariants =
	| 'div'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'p'
	| 'span';

type Mode = 'primary' | 'error';

interface ITypographyProps {
	tag?: TagVariants;
	mode?: Mode;
	className?: string;
	children: ReactNode;
}
type IProps = ITypographyProps & CSSProperties;
/**
 * @tag will have default <div> since it'll probably be our most used tag
 * @props have all our CSS
 */
export const Typography: React.FC<IProps> = ({
	tag = 'div',
	mode = 'primary',
	className = '',
	children,
	...style
}) => {
	const propsWithClassName: Omit<IProps, 'children'> & {
		className: string;
		style: CSSProperties;
	} = {
		className: cn(s[mode], { [className]: className }),
		style,
	};
	return createElement(tag, propsWithClassName, children);
};
