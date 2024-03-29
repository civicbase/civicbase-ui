import { useCallback, useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import tw from 'twin.macro'

import { Tab } from '@headlessui/react'
import { Method, Survey } from 'types/survey.d'

import * as Forms from './steps'
import { languageSchema, likertSchema, quadraticSchema, setupSchema } from './validation2'

function SurveyMultiForm({ survey }: { survey: Survey }) {
  const [isvalid, setValid] = useState(false)
  const {
    watch,
    trigger,
    formState: { errors, isValid, isDirty },
  } = useFormContext()
  const selectedStep = useRef('setup')
  const method = watch('setup.method')
  const state = watch()

  useEffect(() => {
    const setupResult = setupSchema.safeParse(state.setup)

    if (state.setup.method === Method.QUADRATIC) {
      const quadraticResult = quadraticSchema.safeParse(state.quadratic)
      const languageResult = languageSchema.safeParse(state.language)

      if (setupResult.success && quadraticResult.success && languageResult.success) {
        setValid(true)
      } else {
        setValid(false)
      }
    } else if (state.setup.method === Method.LIKERT) {
      const likertResult = likertSchema.safeParse(state.likert)
      if (likertResult.success) {
        setValid(true)
      } else {
        setValid(false)
      }
    } else {
      setValid(false)
    }
  }, [state])

  const getSteps = useCallback(() => {
    const steps = [
      {
        id: 'setup',
        label: 'Setup',
        Component: <Forms.Setup />,
      },
      {
        id: 'quadratic',
        label: 'Quadratic Questions',
        Component: <Forms.Quadratic isPublished={survey?.status === 'published'} />,
      },
      {
        id: 'language',
        label: 'Language',
        Component: <Forms.Language />,
      },
      {
        id: 'likert',
        label: 'Likert Questions',
        Component: <Forms.Likert isPublished={survey?.status === 'published'} />,
      },
      {
        id: 'message',
        label: 'Messages',
        Component: <Forms.Messages />,
      },
      {
        id: 'customize',
        label: 'Customize',
        Component: <Forms.Features />,
      },
      {
        id: 'review',
        label: 'Review',
        Component: <Forms.Review />,
      },
    ]

    if (method === Method.QUADRATIC) {
      return steps.filter(step => step.id !== 'likert')
    }

    return steps.filter(step => step.id !== 'quadratic' && step.id !== 'language')
  }, [method, survey?.status])

  const steps = getSteps()

  const handleChange = async (index: number) => {
    const step = steps[index]

    trigger(selectedStep.current)

    selectedStep.current = step.id
  }

  return (
    <div tw="w-full px-2 py-16 sm:px-0">
      <Tab.Group onChange={handleChange}>
        <Tab.List tw="flex space-x-1 rounded-xl bg-brand p-1 sticky top-[70px] z-40">
          {steps.map(step => {
            const errorLength = Object.keys(errors[step.id] || {}).filter(
              key => !['message', 'ref', 'type'].includes(key),
            ).length

            return (
              <div key={step.id} tw="w-full relative">
                <Tab tw="w-full" disabled={step.id === 'review' && !isvalid}>
                  {({ selected }) => {
                    return (
                      <div
                        css={[
                          tw`cursor-pointer flex justify-center items-center h-full`,
                          tw`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white`,
                          tw`ring-brand/60 focus:outline-none focus:ring-2`,
                          selected
                            ? tw`bg-white text-brand shadow`
                            : tw`text-white hover:bg-white/[0.12] hover:text-white`,
                        ]}
                      >
                        {step.label}
                      </div>
                    )
                  }}
                </Tab>

                {errorLength > 0 && (
                  <>
                    <span tw="sr-only">Notifications</span>
                    <div tw="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-2 right-0">
                      {errorLength}
                    </div>
                  </>
                )}
              </div>
            )
          })}

          <button
            type="submit"
            css={[
              tw`text-white !bg-gray-500`,
              isDirty && isValid && tw`!bg-green-500 border-2 border-green-300`,
              tw`rounded p-0 w-full max-h-[260px]`,
              isDirty && isValid ? tw`hover:!bg-green-400 font-bold` : tw`hover:!bg-gray-400`,
            ]}
          >
            {survey?.id ? 'Edit' : 'Create'}
          </button>

          {/* <Button css={[isValid ? tw`!bg-green-700` : tw`!bg-gray-300`]}></Button> */}
        </Tab.List>

        <Tab.Panels tw="mt-2">
          {steps.map(step => (
            <Tab.Panel key={step.id} tw="rounded-xl bg-white p-3">
              {step.Component}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default SurveyMultiForm
