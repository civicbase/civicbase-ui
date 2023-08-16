import { convertToRaw } from 'draft-js'
import { SurveyForm } from 'types/forms'
import { Method, QuadraticPreference, SurveyBase } from 'types/survey.d'

// TODO: improve

const transform = (request: SurveyForm): SurveyBase => {
  const welcome = request.message?.welcome
  const completion = request.message?.completion
  const { quadratic, likert, conjoint, setup, language, features } = request

  const transformedRequest: Partial<SurveyBase> = {
    setup,
  }

  if (transformedRequest.setup && !transformedRequest.setup.feedback?.active) {
    delete transformedRequest.setup.feedback
  } else if (transformedRequest.setup?.feedback?.questions) {
    transformedRequest.setup.feedback.questions = transformedRequest.setup.feedback.questions.map(
      (q, index) => ({
        ...q,
        id: `F${index}`,
      }),
    )
  }

  if (request.id) {
    transformedRequest.id = request.id
  }

  // if (request.qualtrics) {
  //   transformedRequest.qualtrics = request.qualtrics
  // }

  if (features && Object.keys(features).length > 0) {
    transformedRequest.features = features
  }

  if (
    ((likert && likert.length > 0) || (conjoint && conjoint.length > 0)) &&
    transformedRequest.setup
  ) {
    delete transformedRequest.setup.credits
    delete transformedRequest.language
  }

  if (welcome && request.message?.welcome) {
    if (welcome.getCurrentContent().hasText()) {
      const content = JSON.stringify(convertToRaw(welcome.getCurrentContent()))
      if (content) {
        transformedRequest.message = {
          ...transformedRequest.message,
          welcome: content,
        }
      }
    }
  }

  if (completion && request.message?.completion) {
    if (completion.getCurrentContent().hasText()) {
      const content = JSON.stringify(convertToRaw(completion.getCurrentContent()))
      transformedRequest.message = {
        ...transformedRequest.message,
        completion: content,
      }
    }
  }

  if (quadratic && quadratic.length > 0 && setup.method === Method.QUADRATIC) {
    if (!setup.methodPreference && transformedRequest.setup) {
      transformedRequest.setup.methodPreference = QuadraticPreference.RADIUS
    }

    if (language) {
      transformedRequest.language = language
    }

    transformedRequest.quadratic = quadratic.map(question => {
      const statement = JSON.stringify(convertToRaw(question.statement.getCurrentContent()))

      return {
        ...question,
        statement,
      }
    })
  }

  if (likert && likert.length > 0 && setup.method === Method.LIKERT) {
    transformedRequest.likert = likert.map(question => {
      const statement = JSON.stringify(convertToRaw(question.statement.getCurrentContent()))

      return {
        ...question,
        statement,
      }
    })
  }

  if (conjoint && conjoint.length > 0 && setup.method === Method.CONJOINT) {
    transformedRequest.conjoint = conjoint.map(question => {
      const statement = JSON.stringify(convertToRaw(question.statement.getCurrentContent()))

      return {
        ...question,
        statement,
      }
    })
  }

  if (transformedRequest.language && transformedRequest.language?.jargon !== 'Custom') {
    transformedRequest.language.thumbsUp = transformedRequest.language?.jargon.split('/')[0]
    transformedRequest.language.thumbsDown = transformedRequest.language?.jargon.split('/')[1]
  }

  if (!transformedRequest.message) {
    transformedRequest.message = {}
  }

  // if (transformedRequest.key) {
  //   delete transformedRequest.key
  // }

  return transformedRequest as SurveyBase
}

export default transform
