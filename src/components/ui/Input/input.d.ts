import { InputHTMLAttributes } from 'react'

export type InputProps = {
  error?: boolean
  modified?: boolean
} & InputHTMLAttributes<HTMLInputElement>
