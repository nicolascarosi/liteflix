import React from 'react'
import { ISize } from 'interfaces'
import { IButton } from '../Button'

interface IModal {
  title: string
  size?: ISize
  children?: React.ReactNode
  confirmButton?: IButton
  cancelButton?: IButton | null
  onClose: () => void
}

export type { IModal }
