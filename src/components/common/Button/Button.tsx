import { IButton } from './Button.interface'
import { StyledButton, StyledLink } from './Button.styles'
import { Icon } from 'utils'

const Button = (
  props: IButton = {
    color: 'black',
    variant: 'default',
    label: '',
    block: false,
  }
) => {
  const { href, label, icon } = props

  if (href) {
    return (
      <StyledLink {...props}>
        {icon ? <Icon icon={icon} /> : ''}
        <span>{label}</span>
      </StyledLink>
    )
  } else {
    return (
      <StyledButton {...props}>
        {icon ? <Icon icon={icon} /> : ''}
        <span>{label}</span>
      </StyledButton>
    )
  }
}

export { Button }
