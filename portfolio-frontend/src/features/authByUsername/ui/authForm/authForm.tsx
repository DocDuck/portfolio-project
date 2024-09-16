import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
	authByUsernameSelectors,
	authByUsernameActions,
	authByUsernameThunks,
} from '../../model';
import { useAppDispatch, useAppSelector } from 'shared/hooks/store';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { Typography } from 'shared/ui/typography';
import s from './authForm.module.scss';

export const AuthForm: React.FC = memo(() => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const username = useAppSelector(authByUsernameSelectors.getAuthUsername);
	const password = useAppSelector(authByUsernameSelectors.getAuthPassword);
	const isLoading = useAppSelector(authByUsernameSelectors.getAuthIsLoading);
	const error = useAppSelector(authByUsernameSelectors.getAuthError);
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
			{error && (
				<Typography marginBottom='12px' mode='error' tag='p'>
					{error}
				</Typography>
			)}
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
			<Button
				size='m'
				className={s.button}
				onClick={onAuthClick}
				isDisabled={isLoading}
			>
				{t('Войти')}
			</Button>
		</div>
	);
});
AuthForm.displayName = 'AuthForm';

export default AuthForm;
