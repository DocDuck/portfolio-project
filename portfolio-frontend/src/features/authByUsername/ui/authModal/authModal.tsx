import { cn } from 'shared/lib/classNames';
import { AuthForm } from '../authForm';
import s from './authModal.module.scss';
import { Modal } from 'shared/ui/modal';

interface IProps {
	isOpen: boolean;
	onClose: () => void;
	className?: string;
}

export const AuthModal: React.FC<IProps> = ({ className = '', ...rest }) => {
	return (
		<Modal
			isLazy={true}
			className={cn(s.authModal, { [className]: !!className })}
			{...rest}
		>
			<AuthForm />
		</Modal>
	);
};
AuthModal.displayName = 'AuthModal';
