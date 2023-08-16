import { Answer } from './answer.d'
import { Survey } from './survey'

export type BodyRequest = LoginRequest | SignupRequest | ResetRequest | Answer | Survey

export interface LoginRequest {
  email: string
  password: string
}

export interface SignupRequest {
  name: string
  email: string
  password: string
}

export interface ResetRequest {
  email: string
}
