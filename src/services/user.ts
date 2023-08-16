import client from './api'

export const updatePassword = (password: string) => client('updatePassword', { body: { password } })
export const updateInformation = (name: string) => client('updateInformation', { body: { name } })
