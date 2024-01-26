import { useTranslation } from 'react-i18next'

import { Label } from '#components/label'

export const SubTwo = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <h1>Onboarding-SubTwo Screen</h1>
      <Label>{t('lorem')}</Label>
    </div>
  )
}
