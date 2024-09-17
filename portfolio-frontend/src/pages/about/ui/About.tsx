import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
	const { t } = useTranslation('about');

	return <div>{t('О сайте')}</div>;
};
About.displayName = 'About';

export default About;
