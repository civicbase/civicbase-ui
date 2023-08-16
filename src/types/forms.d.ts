import { EditorState } from 'draft-js'

import { Features, Language, Method, QuadraticPreference } from './survey'

export type SurveyForm = {
  isEditing: boolean
  setup: {
    topic: string
    method: Method
    methodPreference?: QuadraticPreference
    credits?: number
    feedback?: {
      active: boolean
      questions: {
        id: string
        question: string
      }[]
    }
  }
  language?: Language
  message?: {
    welcome: EditorState
    completion: EditorState
  }
  quadratic?: Quadratic[]
  conjoint?: Conjoint[]
  likert?: Likert[]
  features?: Features
  id?: string
}

type Quadratic = {
  id?: string
  statement: EditorState
}

type Likert = {
  id?: string
  statement: EditorState
  items: LikertItems[]
  method: string
  label1?: string
  label2?: string
  from: number
  to: number
}

type Conjoint = {
  id?: string
  statement: EditorState
  attributes: ConjointAttributes[]
  items: ConjointItems[]
}

type Message = {
  welcome: EditorState
  completion: EditorState
}

export enum LikertMethod {
  SINGLE = 'Single Likert Scale',
  MULTIPLE = 'Multiple Choice Likert Scale',
}
