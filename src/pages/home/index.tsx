import { useTranslation } from 'react-i18next'

import { Label } from '#components/label'

export const Home = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <h1>Home Screen</h1>
      <Label>{t('lorem')}</Label>
    </div>
  )
}
