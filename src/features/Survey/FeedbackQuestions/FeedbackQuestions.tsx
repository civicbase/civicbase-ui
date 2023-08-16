import { useFormContext } from 'react-hook-form'

import tw from 'twin.macro'

import TextArea from '@ui/TextArea'
import { Headline } from '@ui/Typography'

type Questions = {
  id: string
  question: string
}

const FeedbackQuestions = ({ questions }: { questions: Questions[] }) => {
  const { register } = useFormContext()

  return (
    <div css={tw`flex flex-col w-full`}>
      {questions.map((item, index) => (
        <div key={item.id} css={tw`mb-6`}>
          <Headline>{item.question}</Headline>

          <TextArea {...register(`feedback.${index}.answer`)} css={tw`mt-4`} />
        </div>
      ))}
    </div>
  )
}

export default FeedbackQuestions
