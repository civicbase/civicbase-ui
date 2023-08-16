export interface Survey extends SurveyBase {
  mode: Mode // exclusive for dashboard
  isBusy?: boolean
  overview?: Overview
}

// TODO: this should be reflect in the backend, analytics shouldn't come in and should be ignored
export interface SurveyBase {
  id: string
  conjoint?: Conjoint[]
  createdAt: string
  features?: Features
  finishedAt?: string
  likert?: Likert[]
  language?: Language
  message?: Message
  publishedAt?: string
  quadratic?: Quadratic[]
  setup: Setup
  status: Status
  uid: string
  updatedAt?: string
}

type Overview = {
  id: string // this is the survey id, redundant
  access: {
    pilot: number
    published: number
  }
  respondent: {
    pilot: number
    published: number
  }
  results: any // TODO: can be quadratic, conjoint and likert
  feedback?: Feedback
}

type Conjoint = {
  id?: string
  statement: string
  attributes: {
    name: string
    key: string
  }[]
  items: {
    id: string
    [key: string]: string
  }[]
}

type Likert = {
  id?: string
  statement: string
  method: string
  from: number
  to: number
  items: {
    description: string
  }[]
  label1?: string
  label2?: string
}

type Quadratic = {
  id?: string
  statement: string
}

type Feedback = {
  pilot: { answer: string; id: string }[]
  published: { answer: string; id: string }[]
}

type Features = {
  multipleAnswerFromSameSource?: boolean
  randomQuestions?: boolean
}

type Language = {
  token: string
  thumbsUp?: string
  thumbsDown?: string
  jargon: string
  customToken?: string
}

type Message = {
  completion?: string
  welcome?: string
}

export enum Mode {
  PILOT = 'pilot',
  PUBLISHED = 'published',
}

export enum Method {
  LIKERT = 'Likert',
  CONJOINT = 'Conjoint',
  QUADRATIC = 'Quadratic',
}

export enum QuadraticPreference {
  RADIUS = 'radius',
  DIAMOND = 'diamond',
}

export enum Status {
  PILOT = 'pilot',
  PUBLISHED = 'published',
  FINISHED = 'finished',
}

type Setup = {
  topic: string
  method: Method
  methodPreference?: QuadraticPreference // TODO: should rename methodPreference to quadraticPreference
  credits?: number
  feedback?: {
    active: boolean
    questions: {
      id: string
      question: string
    }[]
  }
}
