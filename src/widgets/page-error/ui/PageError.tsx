import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/button";
import s from "./pageError.module.scss";

export const PageError: React.FC = () => {
  const { t } = useTranslation();
  const handleClick = () => {
    location.reload()
  }
  return (
    <div className={s.pageError}>
      <div className={s.text}>{t("Что-то пошло не так... Попробуйте перезагрузить страницу")}</div>
      <Button onClick={handleClick} mode="clear">{t("Перезагрузить страницу")}</Button>
    </div>
  )
}
PageError.displayName = "PageError";