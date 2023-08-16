import { Quadratic } from 'types/survey.d'

import { TAKEN_SURVEY_TOKEN } from './constants'
import shuffle from './shuffle'

export const createQuestions = (questions: Quadratic[], randomQuestions: boolean) => {
  const newQs = questions.map(question => ({
    ...question,
    vote: 0,
    credits: 0,
    order: 0,
    status: undefined,
    animated: [],
  }))

  if (randomQuestions) {
    return shuffle(newQs).map((question, index) => ({ ...question, order: index }))
  }

  return newQs.map((question, index) => ({ ...question, order: index }))
}

export const setSurveyTaken = (surveyId: string) => {
  const item = window.localStorage.getItem(TAKEN_SURVEY_TOKEN)
  const takenSurveys: string[] = item ? JSON.parse(item) : []

  const isExist = takenSurveys.find(id => id === surveyId)

  if (!isExist) {
    takenSurveys.push(surveyId)
    window.localStorage.setItem(TAKEN_SURVEY_TOKEN, JSON.stringify(takenSurveys))
  }
}
