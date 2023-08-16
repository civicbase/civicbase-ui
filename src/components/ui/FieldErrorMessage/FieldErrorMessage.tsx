import { FieldErrors } from 'react-hook-form'

import tw from 'twin.macro'

import { Hint } from '@ui/Typography'

import { ErrorMessage } from '@hookform/error-message'

const FieldErrorMessage = ({ errors, name, ...props }: { errors: FieldErrors; name: string }) => (
  <ErrorMessage
    name={name}
    errors={errors}
    render={({ message }) => (
      <Hint css={tw`text-error-600 text-opacity-75 mt-1 ml-2 dark:text-error-300`} {...props}>
        {message}
      </Hint>
    )}
  />
)

export default FieldErrorMessage
