import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import s from './loginForm.module.scss';

export const LoginForm: React.FC = () => {
	const { t } = useTranslation();
	return (
		<div className={s.loginForm}>
			<input type='text' className={s.input} />
			<input type='text' className={s.input} />
			<Button className={s.button}>{t('Войти')}</Button>
		</div>
	);
};
LoginForm.displayName = 'LoginForm';
