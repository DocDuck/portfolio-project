import { Suspense } from 'react';
import { cn } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/modal';
import { PageLoader } from 'widgets/pageLoader';
import { AuthForm } from '../authForm/authForm.lazy';
import s from './authModal.module.scss';

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
			<Suspense fallback={<PageLoader />}>
				<AuthForm />
			</Suspense>
		</Modal>
	);
};
AuthModal.displayName = 'AuthModal';
