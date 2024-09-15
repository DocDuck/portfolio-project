import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthModal } from 'features/authByUsername';
import { userSelectors, userThunks } from 'entities/user';
import { cn } from 'shared/lib/classNames';
import { useAppDispatch, useAppSelector } from 'shared/hooks/store';
import { Button } from 'shared/ui/button';
import s from './navbar.module.scss';

interface IProps {
	className?: string;
}
export const Navbar: React.FC<IProps> = ({ className = '' }) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const authUser = useAppSelector(userSelectors.getAuthUser);
	const [isModelOpen, setIsModelOpen] = useState(false);
	const onModalOpen = () => {
		setIsModelOpen(true);
	};
	const onModalClose = () => {
		setIsModelOpen(false);
	};
	const onLogOut = () => {
		dispatch(userThunks.logoutThunk()).catch(console.error);
	};
	return (
		<div className={cn(s.navbar, { [className]: !!className })}>
			{authUser ? (
				<Button onClick={onLogOut}>{t('Выйти')}</Button>
			) : (
				<>
					<Button onClick={onModalOpen}>{t('Войти')}</Button>
					<AuthModal isOpen={isModelOpen} onClose={onModalClose} />
				</>
			)}
		</div>
	);
};
Navbar.displayName = 'Navbar';
