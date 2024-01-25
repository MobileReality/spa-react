import './App.css'
import '#locales/i18n'

import { Toaster } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'

// import.meta.env
export const App = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <BrowserRouter>
        <div>{t('test')}</div>
      </BrowserRouter>
      <Toaster />
    </>
  )
}
