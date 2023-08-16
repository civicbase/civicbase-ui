const KEY = '__civicbase__'

const storage = {
  getToken: () => localStorage.getItem(KEY),
  setToken: (token: string) => localStorage.setItem(KEY, token),
  hasToken: () => !!localStorage.getItem(KEY),
  clearToken: () => localStorage.removeItem(KEY),
}

export default storage
