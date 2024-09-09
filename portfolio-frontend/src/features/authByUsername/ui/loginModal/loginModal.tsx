import { cn } from 'shared/lib/classNames';
import { LoginForm } from '../loginForm';
import s from './loginModal.module.scss';
import { Modal } from 'shared/ui/modal';

interface IProps {
	isOpen: boolean;
	onClose: () => void;
	className?: string;
}

export const LoginModal: React.FC<IProps> = ({ className = '', ...rest }) => {
	return (
		<Modal
			isLazy={true}
			className={cn(s.loginModal, { [className]: !!className })}
			{...rest}
		>
			<LoginForm />
		</Modal>
	);
};
LoginModal.displayName = 'LoginModal';
