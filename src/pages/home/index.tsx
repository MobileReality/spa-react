import { useTranslation } from 'react-i18next'

export const Home = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <h1>Home Screen</h1>
      <p>{t('lorem')}</p>
    </div>
  )
}
