import { MouseEvent, ReactNode, useCallback } from "react";
import { Portal } from "shared/ui/portal";
import "./modal.scss";
import { cn } from "shared/lib/classNames";
import { log } from "console";

interface IModalProps {
	children: ReactNode;
	className?: string;
	isOpen?: boolean;
	onClose?: () => void;
}

export const Modal: React.FC<IModalProps> = (props) => {
	const { children, className = '', isOpen = false, onClose } = props;
	console.log('isOpen', isOpen)
	const onOutsideClick = useCallback(() => {
		onClose && onClose();
	}, [onClose]);
	const onContentClick = (e: MouseEvent) => e.stopPropagation(); 
	return (
		<Portal>
			<div
				className={cn('modal', {
					[className]: !!className,
					'open': isOpen
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