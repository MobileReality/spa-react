import { useTranslation } from 'react-i18next'

import { Label } from '#components/label'

export const SubOne = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <h1>Onboarding-SubOne Screen</h1>
      <Label>{t('lorem')}</Label>
    </div>
  )
}
