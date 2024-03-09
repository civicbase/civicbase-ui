import { Method } from 'types/survey.d'
import { z } from 'zod'

const getValidationSchema = (method: Method) => {
  // Start with the setup schema as it's always needed
  const setupSchema = z
    .object({
      credits: z
        .number()
        .min(1, { message: 'Credits must be a positive value greater than 0' })
        .max(1000, { message: 'Credits must be less than 1001' })
        .optional(),
      topic: z
        .string()
        .min(3, { message: 'Topic must have at least 3 characters' })
        .max(50, { message: 'Topic must have max 50 characters' }),
      method: z.enum([Method.QUADRATIC, Method.LIKERT]),
      feedback: z
        .object({
          active: z.boolean().optional(),
          questions: z
            .array(
              z.object({
                question: z
                  .string()
                  .min(3, { message: 'Feedback question must have more than 2 characters' })
                  .max(250, { message: 'Feedback question must have less than 250 characters' }),
              }),
            )
            .optional(),
        })
        .optional()
        .refine(feedback => !(feedback?.active && feedback?.questions?.length === 0), {
          message: 'You should have at least 1 question',
        }),
      methodPreference: z.string().optional(),
    })
    .refine(
      data => {
        // Check if method is QUADRATIC, then methodPreference must be provided
        if (data.method === Method.QUADRATIC && !data.methodPreference) {
          return false
        }
        return true
      },
      {
        message: 'Method preference is required when the method is Quadratic',
        path: ['methodPreference'],
      },
    )

  // Conditionally add language and quadratic based on the method
  const conditionalSchemas: any = {}

  if (method === Method.QUADRATIC) {
    conditionalSchemas.language = z
      .object({
        jargon: z.enum(['Agree/Disagree', 'Favor/Oppose', 'Approve/Reject', 'Aye/Nay', 'Custom']),
        thumbsUp: z.string().optional(),
        thumbsDown: z.string().optional(),
        token: z.enum(['Credits', 'Coins', 'Tokens', 'Custom']),
        customToken: z.string().optional(),
      })
      .refine(
        data => {
          if (data.jargon === 'Custom' && (!data.thumbsUp || data.thumbsUp.trim() === '')) {
            return false
          }
          if (data.jargon === 'Custom' && (!data.thumbsDown || data.thumbsDown.trim() === '')) {
            return false
          }
          if (data.token === 'Custom' && (!data.customToken || data.customToken.trim() === '')) {
            return false
          }
          return true
        },
        {
          message: 'Custom validation failed', // Simple string for now
        },
      )

    conditionalSchemas.quadratic = z
      .array(
        z
          .object({
            statement: z.any(),
            id: z.string().optional(),
          })
          .refine(data => !(data.statement.getCurrentContent().getPlainText('\u0001') === ''), {
            message: 'This question is required',
          }),
      )
      .min(1, 'You must have at least 1 questions')
      .max(19, 'You can have max 19 questions')
  }

  // Always include features and message schemas
  const constantSchemas = {
    features: z
      .object({
        randomQuestions: z.boolean().optional(),
        multipleAnswerFromSameSource: z.boolean().optional(),
      })
      .optional(),
    message: z
      .object({
        welcome: z.any().optional(),
        completion: z.any().optional(),
      })
      .optional(),
  }

  // Combine all parts into one schema
  const combinedSchema = z.object({
    setup: setupSchema,
    ...conditionalSchemas,
    ...constantSchemas,
  })

  return combinedSchema
}

export default getValidationSchema
