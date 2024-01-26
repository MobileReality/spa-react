/* eslint-disable no-useless-catch */
import { getApiClient } from '#api/api'

const AUTH0_API_URL = import.meta.env.REACT_APP_AUTH0_API_URL
const AUTH0_CLIENT_ID = import.meta.env.REACT_APP_AUTH0_CLIENT_ID

const REDIRECT_URL = window.location.origin

const apiClient = getApiClient()

export const Auth0Api = {
  loginApiRequest: idToken =>
    apiClient.post('/auth/login', {
      idToken,
    }),

  logoutRedirect: () => {
    localStorage.removeItem('auth')
    window.location.href = `https://${AUTH0_API_URL}/v2/logout?client_id=${AUTH0_CLIENT_ID}&returnTo=${REDIRECT_URL}`
  },

  emailResendRequest: userId =>
    apiClient.post('auth/send-verify-email', {
      userId,
    }),
}
