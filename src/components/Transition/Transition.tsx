import { TwStyle } from 'twin.macro'

import { Transition as HeadlessUiTransition, TransitionEvents } from '@headlessui/react'

type TransitionProps = {
  enter?: TwStyle
  enterFrom?: TwStyle
  enterTo?: TwStyle
  entered?: TwStyle
  leave?: TwStyle
  leaveFrom?: TwStyle
  leaveTo?: TwStyle
  children: React.ReactNode
  show?: boolean
  as?: React.ElementType
  appear?: boolean
  unmount?: boolean
} & TransitionEvents

function getProps(props: TransitionProps) {
  return {
    ...props,
    enter: 'enter',
    enterFrom: 'enter-from',
    enterTo: 'enter-to',
    entered: 'entered',
    leave: 'leave',
    leaveFrom: 'leave-from',
    leaveTo: 'leave-to',
    css: {
      '&.enter': props.enter,
      '&.enter-from': props.enterFrom,
      '&.enter-to': props.enterTo,
      '&.entered': props.entered,
      '&.leave': props.leave,
      '&.leave-from': props.leaveFrom,
      '&.leave-to': props.leaveTo,
    },
    beforeEnter: () => props.beforeEnter?.(),
    afterEnter: () => props.afterEnter?.(),
    beforeLeave: () => props.beforeLeave?.(),
    afterLeave: () => props.afterLeave?.(),
  }
}

export default function Transition(props: TransitionProps) {
  const attributes = getProps(props)
  return <HeadlessUiTransition {...attributes} as={attributes.as as any} css={attributes.css} />
}

Transition.Child = function TransitionChild(props: TransitionProps) {
  const attributes = getProps(props)

  return (
    <HeadlessUiTransition.Child {...attributes} as={attributes.as as any} css={attributes.css} />
  )
}
