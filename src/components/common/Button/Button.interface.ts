import { IButtonVariant, IColor } from 'interfaces'

interface IButton {
  color?: IColor
  variant?: IButtonVariant
  disabled?: boolean
  href?: string
  label?: string
  block?: boolean
  onClick?: () => void
  icon?: string
}

export type { IButton }
