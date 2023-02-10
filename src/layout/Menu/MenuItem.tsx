import { IMenuItem } from './Menu.interface'
import { StyledMenuItem } from './Menu.styles'

const MenuItem = ({ label = '', children }: IMenuItem) => (
  <StyledMenuItem>
    {label}
    {children}
  </StyledMenuItem>
)

export { MenuItem }
