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

	/** Callbacks */
	const onOutsideClick = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				setIsClosing(false);
				document.removeEventListener("keydown", onKeydown);
				onClose();
			}, CLOSING_DELAY);
		}
	}, [onClose, setIsClosing]);
	const onKeydown = useCallback((e: KeyboardEvent) => {
		if (e.key === "Escape") {
			onOutsideClick();
		}
	}, [onOutsideClick]);
	const onContentClick = (e: MouseEvent) => e.stopPropagation();

	/** Effects */
	useEffect(() => {
		// Закрытие модалки на esc
		isOpen && document.addEventListener("keydown", onKeydown);	
		// Очищаем таймер анимации при анмаунте и обработчик клавиш
		return () => {
			clearTimeout(timerRef.current);
			document.removeEventListener("keydown", onKeydown);
		};
	}, [isOpen]);

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