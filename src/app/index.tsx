import './App.css'
import '#locales/i18n'

import { Toaster } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import { API_URL } from '#api/constants'

// import.meta.env
export const App = () => {
  const { t } = useTranslation('common')

  return (
    <Auth0Provider
      domain={import.meta.env.REACT_APP_AUTH0_API_URL}
      clientId={import.meta.env.REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: API_URL,
        scope: 'offline_access openid profile email address phone',
      }}
      useRefreshTokens
      onRedirectCallback={() => {}}
    >
      <BrowserRouter>
        <div>{t('test')}</div>
      </BrowserRouter>
      <Toaster />
    </Auth0Provider>
  )
}
