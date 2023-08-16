import { createContext, useContext } from 'react'

import { useSelector } from '@xstate/react'
import { bannerMachine } from 'machines'
import { InterpreterFrom } from 'xstate'

const bannerContext = createContext<InterpreterFrom<typeof bannerMachine> | null>(null)

export function useBanner() {
  const context = useContext(bannerContext)
  if (!context) {
    throw new Error(`useBanner must be called inside a BannerProvider`)
  }
  return context
}
export const BannerProvider = bannerContext.Provider

export const useBannerState = () => {
  return useSelector(useBanner(), state => state.context)
}
