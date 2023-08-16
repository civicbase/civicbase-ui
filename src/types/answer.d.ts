import { Status } from './survey'
import { ConjointAttributes, ConjointItems } from './survey-base'

type AnswerResponse<Type> = {
  createdAt: string
  questions: Type[]
  leftCredits?: number
  status: Status
  surveyId: string
  time: Time
  feedback?: Feedback[]
  [key: string]: any
}

type Time = {
  submitedAt: string
  startAt: string
  surveyLoadAt: string
  questionPageLoadAt: string
}

type Feedback = {
  answer: string
  id: string
}

type Quadratic = {
  id: string
  vote: number
  credits: number
  order: number
}

type Conjoint = {
  id: string
  attributes: ConjointAttributes[]
  items: ConjointItems[]
  selected?: string
}

type Likert = {
  id: string
  item: LikertItem[]
  method: string
}

type LikertItem = {
  description: string
  vote: number
}
