import { useEffect, useState } from 'react'

import { ConjointQuestions } from 'types/survey-base'
import { Survey } from 'types/survey.d'
import shuffle from 'utilities/shuffle'

const useConjoint = (survey: Survey) => {
  const [questions, setQuestions] = useState<ConjointQuestions[]>([])

  useEffect(() => {
    if (survey && survey.conjoint) {
      const newQuestions: any[] = survey.features?.randomQuestions
        ? shuffle(survey.conjoint)
        : survey.conjoint

      setQuestions([...newQuestions])
    }
  }, [survey])

  const vote = (questionIndex: number, id: string) => {
    if (questions) {
      setQuestions(q => {
        return q.map((question, index) => {
          if (index === questionIndex) {
            question.selected = id
          }
          return question
        })
      })
    }
  }

  return {
    questions,
    vote,
  }
}

export default useConjoint
