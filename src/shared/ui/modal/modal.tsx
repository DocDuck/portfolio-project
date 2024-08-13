import { MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "shared/ui/portal";
import "./modal.scss";
import { cn } from "shared/lib/classNames";

interface IModalProps {
	children: ReactNode;
	className?: string;
	isOpen?: boolean;
	onClose?: () => void;
}

const CLOSING_DELAY = 300;

export const Modal: React.FC<IModalProps> = (props) => {
	const { children, className = '', isOpen = false, onClose } = props;
	// Блок для анимированного закрытия модалки
	const [isClosing, setIsClosing] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const onOutsideClick = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				setIsClosing(false);
				onClose();
			}, CLOSING_DELAY);
		}
	}, [onClose]);
	const onContentClick = (e: MouseEvent) => e.stopPropagation();
	return (
		<Portal>
			<div
				className={cn('modal', {
					[className]: !!className,
					'isOpen': isOpen,
					'isClosing': isClosing,
				})}
				onClick={onOutsideClick}
			>
				<div
					className="content"
					onClick={onContentClick}
				>
					{children}
				</div>
			</div>
		</Portal>
	);
}; 

Modal.displayName = "Modal";