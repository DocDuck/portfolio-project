import { ReactNode } from "react";
import { Portal } from "shared/ui/portal";
import "./modal.scss";

interface IModalProps {
  children: ReactNode;
}

export const Modal: React.FC<IModalProps> = (props) => {
	const { children } = props;

	return (
		<Portal>
			<div className="modal">
				<div className="content">
					{children}
				</div>
			</div>
		</Portal>
	);
}; 

Modal.displayName = "Modal";