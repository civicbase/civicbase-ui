import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineWarning } from 'react-icons/ai'
import { BiErrorAlt } from 'react-icons/bi'
import { BsQuestionCircle } from 'react-icons/bs'

import tw from 'twin.macro'

import Button, { IconButton } from '@ui/Button'

import { Dialog } from '@headlessui/react'
import Transition from 'components/Transition'
import { useDialog, useDialogState } from 'contexts/dialog'
import { Visibility } from 'machines/dialogMachine'

const overlayTransitionProps = {
  enter: tw`ease-out duration-300`,
  enterFrom: tw`opacity-0`,
  enterTo: tw`opacity-100`,
  leave: tw`ease-in duration-75`,
  leaveFrom: tw`opacity-100`,
  leaveTo: tw`opacity-0`,
}

const contentTransitionProps = {
  enter: tw`ease-out duration-300`,
  enterFrom: tw`opacity-0 scale-95`,
  enterTo: tw`opacity-100 scale-100`,
  leave: tw`ease-in duration-75`,
  leaveFrom: tw`opacity-100 scale-100`,
  leaveTo: tw`opacity-0 scale-95`,
}

const Modal = () => {
  const { isOpen, variant, actionText, title, content, visibility, callback } = useDialogState()
  const dialogService = useDialog()

  if (!title || !content) {
    return null
  }

  const handleClose = () => {
    dialogService.send({ type: 'CLOSE' })
  }

  const handleCancel = () => {
    dialogService.send({ type: 'CANCEL' })
  }

  const handleConfirm = () => {
    if (callback) {
      callback()
      dialogService.send({ type: 'CONFIRMED' })
    }
  }

  return (
    <Transition appear show={isOpen}>
      <Dialog css={tw`relative z-10`} onClose={handleClose}>
        <Transition.Child {...overlayTransitionProps}>
          <div css={tw`fixed inset-0 bg-black bg-opacity-25`} />
        </Transition.Child>

        <div css={tw`fixed inset-0 overflow-y-auto`}>
          <div css={tw`flex min-h-full items-center justify-center p-4 text-center`}>
            <Transition.Child {...contentTransitionProps}>
              <Dialog.Panel
                data-id="fuck-shit"
                css={tw`w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all`}
              >
                <Dialog.Title
                  css={tw`text-lg font-medium leading-6 text-gray-900 flex items-center justify-between`}
                >
                  <div tw="flex items-center">
                    {visibility === Visibility.CONFIRMATION && (
                      <BsQuestionCircle size={20} tw="mr-2" />
                    )}

                    {visibility === Visibility.ERROR && <BiErrorAlt size={20} tw="mr-2" />}
                    {visibility === Visibility.SUCCESS && (
                      <AiOutlineCheckCircle size={20} tw="mr-2" />
                    )}

                    {visibility === Visibility.WARNING && <AiOutlineWarning size={20} tw="mr-2" />}

                    {title}
                  </div>

                  <IconButton onClick={handleClose}>
                    <AiOutlineClose />
                  </IconButton>
                </Dialog.Title>
                <div css={tw`my-6`}>
                  <p css={tw`text-sm text-gray-500`}>{content}</p>
                </div>

                <div css={tw`mt-4 flex justify-end space-x-4`}>
                  <Button type="button" variant="secondary" onClick={handleCancel}>
                    Cancel
                  </Button>

                  <Button type="button" variant={variant} onClick={handleConfirm}>
                    {actionText}
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
