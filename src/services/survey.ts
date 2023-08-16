import { Survey, SurveyBase } from 'types/survey.d'

import client from './api'

export const createSurvey = (form: SurveyBase): Promise<SurveyBase> =>
  client('survey', { body: form })
export const editSurvey = (form: SurveyBase): Promise<Survey> =>
  client(`survey`, { body: form, method: 'PUT' })
export const getSurveys = (): Promise<SurveyBase[]> => client('surveys')
export const publish = (surveyId: string): Promise<{ id: string }> =>
  client(`publishSurvey/${surveyId}`)
export const finish = (surveyId: string): Promise<{ id: string }> =>
  client(`finishSurvey/${surveyId}`)
export const clone = (surveyId: string): Promise<Survey> => client(`cloneSurvey/${surveyId}`)
export const deleteSurvey = (surveyId: string) => client(`survey/${surveyId}`, { method: 'DELETE' })
export const getSurvey = (surveyId: string): Promise<Survey> => client(`survey/${surveyId}`)
export const createAnswer = (answer: any) => client('answer', { body: answer }) // TODO: reosolve any
