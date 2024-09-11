import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
	authByUsernameSelectors,
	authByUsernameActions,
	authByUsernameThunks,
} from 'features/authByUsername';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { useAppDispatch, useAppSelector } from 'shared/hooks/store';
import s from './authForm.module.scss';

export const AuthForm: React.FC = memo(() => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const username = useAppSelector(authByUsernameSelectors.getAuthUsername);
	const password = useAppSelector(authByUsernameSelectors.getAuthPassword);
	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(authByUsernameActions.setUsername(value));
		},
		[dispatch]
	);
	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(authByUsernameActions.setPassword(value));
		},
		[dispatch]
	);
	const onAuthClick = useCallback(() => {
		dispatch(
			authByUsernameThunks.authByUsernameThunk({ username, password })
		).catch((e) => console.error(e));
	}, [dispatch, password, username]);
	return (
		<div className={s.authForm}>
			<Input
				autofocus={true}
				type='text'
				placeholder='Введите логин'
				className={s.input}
				onChange={onChangeUsername}
				value={username}
			/>
			<Input
				type='password'
				placeholder='Введите пароль'
				className={s.input}
				onChange={onChangePassword}
				value={password}
			/>
			<Button size='m' className={s.button} onClick={onAuthClick}>
				{t('Войти')}
			</Button>
		</div>
	);
});
AuthForm.displayName = 'AuthForm';
