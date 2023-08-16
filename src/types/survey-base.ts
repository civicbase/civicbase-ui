export type Methods = 'Likert' | 'Quadratic' | 'Conjoint'

export type ConjointAttributes = {
  id: string
  name: string
  key: string
}

export type ConjointQuestions = {
  id: string
  statement: string
  attributes: ConjointAttributes[]
  items: ConjointItems[]
  selected?: string
}

export type ConjointItems = {
  id: string
  [key: string]: string
}
