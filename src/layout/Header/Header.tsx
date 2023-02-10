import { StyledHeader } from './Header.styles'
import { Wrapper } from 'utils'
import { Menu, Logo } from 'layout'
import { Button, ModalAddMovie } from 'components'
import { iconPlus } from 'assets'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

const Header = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleCloseModal = () => setOpenModal(false)
  const handleOpenModal = () => setOpenModal(true)

  return (
    <StyledHeader>
      <Wrapper>
        <Logo />
        <Button
          label="Agregar película"
          icon={iconPlus}
          variant="ghost"
          onClick={handleOpenModal}
        />
        <Menu />
      </Wrapper>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {openModal ? <ModalAddMovie onClose={handleCloseModal} /> : null}
      </AnimatePresence>
    </StyledHeader>
  )
}

export { Header }
