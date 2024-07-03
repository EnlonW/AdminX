import { ofetch, type FetchOptions } from 'ofetch'


import { env } from "@/config/env"

const authOnRequest: FetchOptions['onRequest'] = ({ options }) => {
  options.credentials = 'include'
}

export const api = ofetch.create({
  baseURL: env.API_URL,
  onRequest: authOnRequest,
  onResponseError: ({ response, error }) => {
    const message = response?._data?.message || error?.message
    if (message) {
      console.error(message)
    }
    if (response?.status === 401) {
      const searchParams = new URLSearchParams();
      const redirectTo = searchParams.get('redirectTo');
      window.location.href = `/auth/login?redirectTo=${redirectTo}`;
    }
  }
})
