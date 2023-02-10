import { iconNotification, userAvatar } from 'assets'
import { useEffect, useState } from 'react'
import { StyledMenu } from './Menu.styles'
import { MenuList } from './MenuList'

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleToggleMenu = () => {
    setOpenMenu((prevState) => !prevState)
  }

  useEffect(() => {
    if (openMenu) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [openMenu])

  return (
    <StyledMenu className={`${openMenu && 'active'}`}>
      <button className="toggle-menu" onClick={handleToggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <MenuList openMenu={openMenu} />
      <div className="notification">
        <img src={iconNotification} alt="Notification icon" />
      </div>
      <div className="user-avatar">
        <img src={userAvatar} alt="User avatar" />
      </div>
    </StyledMenu>
  )
}

export { Menu }
