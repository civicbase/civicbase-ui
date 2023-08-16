import { convertFromRaw, EditorState } from 'draft-js'
import { SurveyForm } from 'types/forms'
import { Method, Survey } from 'types/survey.d'

const getDefaultValues = (survey: Survey): SurveyForm => {
  if (survey?.id) {
    const welcomeMessage =
      survey.message?.welcome && convertFromRaw(JSON.parse(survey?.message?.welcome))
    const completionMessage =
      survey.message?.completion && convertFromRaw(JSON.parse(survey?.message?.completion))

    return {
      ...survey,
      isEditing: true,
      message: {
        welcome: welcomeMessage
          ? EditorState.createWithContent(welcomeMessage)
          : EditorState.createEmpty(),
        completion: completionMessage
          ? EditorState.createWithContent(completionMessage)
          : EditorState.createEmpty(),
      },
      quadratic: survey.quadratic?.map(question => {
        const statement = EditorState.createWithContent(
          convertFromRaw(JSON.parse(question.statement)),
        )

        return {
          ...question,
          statement,
        }
      }),
      conjoint: survey.conjoint?.map(question => {
        const statement = EditorState.createWithContent(
          convertFromRaw(JSON.parse(question.statement)),
        )

        return {
          ...question,
          statement,
        }
      }),
      likert: survey.likert?.map(question => {
        const statement = EditorState.createWithContent(
          convertFromRaw(JSON.parse(question.statement)),
        )

        return {
          ...question,
          statement,
        }
      }),
    }
  }

  return {
    isEditing: false,
    setup: {
      credits: 100,
      method: Method.QUADRATIC,
      topic: '',
      feedback: {
        active: false,
        questions: [],
      },
    },
    message: {
      welcome: EditorState.createEmpty(),
      completion: EditorState.createEmpty(),
    },
    likert: [
      {
        statement: EditorState.createEmpty(),
        id: 'L1',
        items: [],
        method: 'Single Likert Scale',
        from: 1,
        to: 5,
      },
    ],
  }
}

export default getDefaultValues
