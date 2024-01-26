import './App.css'
import '#locales/i18n'

import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Auth0Provider } from '@auth0/auth0-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { API_URL } from '#api/constants'
import { Navbar } from '#modules/navigation/navbar'
import { Error404 } from '#pages/error-404'
import { Home } from '#pages/home'
import { Onboarding } from '#pages/onboarding'
import { OnboardingDynamicPart } from '#pages/onboarding/onboarding-dynamic-part'
import { SubOne } from '#pages/onboarding/sub-one'
import { SubTwo } from '#pages/onboarding/sub-two'
import { theme } from '#theme'

const queryClient = new QueryClient()

export const App = () => {
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
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/onboarding" element={<Onboarding />}>
                <Route path=":id" element={<OnboardingDynamicPart />} />
                <Route path="sub-one" element={<SubOne />} />
                <Route path="sub-two" element={<SubTwo />} />
              </Route>
              <Route path="*" element={<Error404 />} />
            </Routes>
          </BrowserRouter>
          <Toaster />
        </ThemeProvider>
      </QueryClientProvider>
    </Auth0Provider>
  )
}
