import client, { file } from './api'

export const overview = (surveyId: string) => client(`overview/${surveyId}`)
export const csv = (surveyId: string, mode: string) => file(`csv/${surveyId}/${mode}`)
