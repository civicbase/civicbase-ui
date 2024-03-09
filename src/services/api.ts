import { BodyRequest } from 'types/request.d'

interface Request {
  body?: BodyRequest
  headers?: HeadersInit
  method?: 'DELETE' | 'PUT'
}

const client = async (endpoint: string, { body, ...other }: Request = {}) => {
  const headers: HeadersInit = { 'content-type': 'application/json' }

  const config: RequestInit = {
    method: body ? 'POST' : 'GET',
    ...other,
    headers: {
      ...headers,
      ...other.headers,
    },

    credentials: 'include',
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  return window
    .fetch(`${import.meta.env.VITE_ENDPOINT}/${endpoint}`, config)
    .then(async response => {
      const data = await response.json()

      if (response.ok) {
        return data
      }

      return Promise.reject(data)
    })
}

export const file = async (endpoint: string, { body, ...other }: Request = {}) => {
  const headers: HeadersInit = { 'content-type': 'application/json' }

  const config: RequestInit = {
    method: body ? 'POST' : 'GET',
    ...other,
    headers: {
      ...headers,
    },

    credentials: 'include',
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  return window
    .fetch(`${import.meta.env.VITE_ENDPOINT}/${endpoint}`, config)
    .then(async response => {
      const data = response

      if (response.ok) {
        return data
      }

      return Promise.reject(data)
    })
}

export default client
