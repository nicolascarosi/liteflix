import {
  StyledModal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from './Modal.styles'
import { Icon, isMobile } from 'utils'
import { iconClose } from 'assets'
import { IModal } from './Modal.interface'
import { Button } from '../Button'
import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Backdrop } from 'components'

const modalRoot = document.getElementById('modal-root') as HTMLElement

const dropIn = {
  hidden: {
    y: '100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
}

const Modal = (props: IModal) => {
  const {
    title,
    size = 'normal',
    children,
    confirmButton,
    cancelButton,
    onClose,
  } = props

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleCloseModal = (): void => {
    onClose()
  }

  const modal: React.ReactNode = (
    <>
      <Backdrop onClick={handleCloseModal} />
      <StyledModal
        as={motion.div}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ModalContent size={size}>
          <ModalHeader>
            <h3>{title}</h3>
            {!isMobile && (
              <button onClick={handleCloseModal}>
                <Icon icon={iconClose} width={20} height={20} />
              </button>
            )}
          </ModalHeader>
          <ModalBody>
            {children}
            {confirmButton || cancelButton ? (
              <ModalFooter>
                {confirmButton && <Button {...confirmButton} />}
                {cancelButton && <Button {...cancelButton} />}
              </ModalFooter>
            ) : null}
          </ModalBody>
        </ModalContent>
      </StyledModal>
    </>
  )

  return ReactDOM.createPortal(modal, modalRoot)
}

export { Modal }
