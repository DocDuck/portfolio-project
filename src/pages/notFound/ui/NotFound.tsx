import { useTranslation } from 'react-i18next'
import s from './notFound.module.scss'

export const NotFound: React.FC = () => {
  const { t } = useTranslation();
  return (<div className={s.notFound}>{t("Страница не найдена")}</div>)
}
NotFound.displayName = "NotFound"