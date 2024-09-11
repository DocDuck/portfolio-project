import { cn } from 'shared/lib/classNames';
import s from './navbar.module.scss';
import { Button } from 'shared/ui/button';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthModal } from 'features/authByUsername';

interface IProps {
	className?: string;
}
export const Navbar: React.FC<IProps> = ({ className = '' }) => {
	const { t } = useTranslation();
	const [isModelOpen, setIsModelOpen] = useState(false);
	const onModalOpen = () => {
		setIsModelOpen(true);
	};
	const onModalClose = () => {
		setIsModelOpen(false);
	};
	return (
		<div className={cn(s.navbar, { [className]: !!className })}>
			<Button onClick={onModalOpen}>{t('Войти')}</Button>
			<AuthModal isOpen={isModelOpen} onClose={onModalClose} />
		</div>
	);
};
Navbar.displayName = 'Navbar';
