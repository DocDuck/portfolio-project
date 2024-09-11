import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import s from './authForm.module.scss';

export const AuthForm: React.FC = () => {
	const { t } = useTranslation();
	return (
		<div className={s.authForm}>
			<Input
				autofocus={true}
				type='text'
				placeholder='Введите логин'
				className={s.input}
			/>
			<Input type='password' placeholder='Введите пароль' className={s.input} />
			<Button size='m' className={s.button}>
				{t('Войти')}
			</Button>
		</div>
	);
};
AuthForm.displayName = 'AuthForm';
