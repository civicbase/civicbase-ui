import { useEffect, useMemo } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import { useActor } from '@xstate/react'
import SurveyMultiForm, { validationSchema, transform } from 'components/forms/SurveyMultiForm'
import { useDashboard } from 'contexts/dashboard'
import { SurveyForm as SurveyFormProps } from 'types/forms'
import { Method, Survey } from 'types/survey.d'
import getSurveyFormDefaultValues from 'utilities/getSurveyFormDefaultValues'

const SurveyForm = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const survey = location.state as Survey
  const dashboardService = useDashboard()
  const [, send] = useActor(dashboardService)
  const defaultValues = useMemo(() => getSurveyFormDefaultValues(survey), [survey])

  const methods = useForm<SurveyFormProps>({
    mode: 'all',
    defaultValues,
    resolver: zodResolver(validationSchema),
  })

  const method = methods.watch('setup.method')

  useEffect(() => {
    if (method === Method.LIKERT) {
      methods.setValue('language', undefined)
      methods.setValue('quadratic', undefined)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method])

  const onSubmit: SubmitHandler<SurveyFormProps> = values => {
    const transformedSurvey = transform(values as SurveyFormProps)
    debugger
    navigate('/')

    if (survey?.id) {
      send({
        type: 'UPDATE',
        survey: { ...survey, ...transformedSurvey, id: survey.id },
        surveyId: survey.id,
      })
    } else {
      send({ type: 'CREATE', survey: transformedSurvey })
    }
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <SurveyMultiForm survey={survey} />
      </form>
    </FormProvider>
  )
}

export default SurveyForm

/*
Single Likert Scale:
[
    {
        "statement": {
            "_immutable": {
                "allowUndo": true,
                "currentContent": {
                    "entityMap": {},
                    "blockMap": {
                        "6lskg": {
                            "key": "6lskg",
                            "type": "unstyled",
                            "text": "Question 1",
                            "characterList": [
                                {
                                    "style": [],
                                    "entity": null
                                },
                                {
                                    "style": [],
                                    "entity": null
                                },
                                {
                                    "style": [],
                                    "entity": null
                                },
                                {
                                    "style": [],
                                    "entity": null
                                },
                                {
                                    "style": [],
                                    "entity": null
                                },
                                {
                                    "style": [],
                                    "entity": null
                                },
                                {
                                    "style": [],
                                    "entity": null
                                },
                                {
                                    "style": [],
                                    "entity": null
                                },
                                {
                                    "style": [],
                                    "entity": null
                                },
                                {
                                    "style": [],
                                    "entity": null
                                }
                            ],
                            "depth": 0,
                            "data": {}
                        }
                    },
                    "selectionBefore": {
                        "anchorKey": "6lskg",
                        "anchorOffset": 0,
                        "focusKey": "6lskg",
                        "focusOffset": 0,
                        "isBackward": false,
                        "hasFocus": true
                    },
                    "selectionAfter": {
                        "anchorKey": "6lskg",
                        "anchorOffset": 10,
                        "focusKey": "6lskg",
                        "focusOffset": 10,
                        "isBackward": false,
                        "hasFocus": true
                    }
                },
                "decorator": null,
                "directionMap": {
                    "6lskg": "LTR"
                },
                "forceSelection": false,
                "inCompositionMode": false,
                "inlineStyleOverride": null,
                "lastChangeType": "insert-characters",
                "nativelyRenderedContent": null,
                "redoStack": [],
                "selection": {
                    "anchorKey": "6lskg",
                    "anchorOffset": 10,
                    "focusKey": "6lskg",
                    "focusOffset": 10,
                    "isBackward": false,
                    "hasFocus": false
                },
                "treeMap": {
                    "6lskg": [
                        {
                            "start": 0,
                            "end": 10,
                            "decoratorKey": null,
                            "leaves": [
                                {
                                    "start": 0,
                                    "end": 10
                                }
                            ]
                        }
                    ]
                },
                "undoStack": [
                    {
                        "entityMap": {},
                        "blockMap": {
                            "6lskg": {
                                "key": "6lskg",
                                "type": "unstyled",
                                "text": "",
                                "characterList": [],
                                "depth": 0,
                                "data": {}
                            }
                        },
                        "selectionBefore": {
                            "anchorKey": "6lskg",
                            "anchorOffset": 4,
                            "focusKey": "6lskg",
                            "focusOffset": 4,
                            "isBackward": false,
                            "hasFocus": true
                        },
                        "selectionAfter": {
                            "anchorKey": "6lskg",
                            "anchorOffset": 0,
                            "focusKey": "6lskg",
                            "focusOffset": 0,
                            "isBackward": false,
                            "hasFocus": true
                        }
                    },
                    {
                        "entityMap": {},
                        "blockMap": {
                            "6lskg": {
                                "key": "6lskg",
                                "type": "unstyled",
                                "text": "Test",
                                "characterList": [
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    }
                                ],
                                "depth": 0,
                                "data": {}
                            }
                        },
                        "selectionBefore": {
                            "anchorKey": "6lskg",
                            "anchorOffset": 0,
                            "focusKey": "6lskg",
                            "focusOffset": 0,
                            "isBackward": false,
                            "hasFocus": true
                        },
                        "selectionAfter": {
                            "anchorKey": "6lskg",
                            "anchorOffset": 4,
                            "focusKey": "6lskg",
                            "focusOffset": 4,
                            "isBackward": false,
                            "hasFocus": true
                        }
                    },
                    {
                        "entityMap": {},
                        "blockMap": {
                            "6lskg": {
                                "key": "6lskg",
                                "type": "unstyled",
                                "text": "",
                                "characterList": [],
                                "depth": 0,
                                "data": {}
                            }
                        },
                        "selectionBefore": {
                            "anchorKey": "6lskg",
                            "anchorOffset": 0,
                            "focusKey": "6lskg",
                            "focusOffset": 0,
                            "isBackward": false,
                            "hasFocus": false
                        },
                        "selectionAfter": {
                            "anchorKey": "6lskg",
                            "anchorOffset": 0,
                            "focusKey": "6lskg",
                            "focusOffset": 0,
                            "isBackward": false,
                            "hasFocus": false
                        }
                    }
                ]
            }
        },
        "id": "L1",
        "items": [],
        "method": "Single Likert Scale",
        "from": 1,
        "to": 5,
        "label1": "Label 1",
        "label2": "Label 5"
    }
]

Multiple Likert Scale:

/** 
TODO: 
1. remove items array from both likert
2. rows, columns should be an array of string only in multiple likert
3. label 1 and label2 should be deleted on multiple likert
4. this all should be done in the transform
5. Review step should indicate when it is ready for review
6. Remove the uppercase from teh create button
*/
