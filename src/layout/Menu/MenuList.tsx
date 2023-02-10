import { iconPlus } from 'assets'
import { Button, ModalAddMovie, Backdrop } from 'components'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { IMenuItem, IMenuList } from './Menu.interface'
import { StyledMenuList } from './Menu.styles'
import { MenuItem } from './MenuItem'

const menuItems: IMenuItem[] = [
  { label: 'Inicio' },
  { label: 'Series' },
  { label: 'Películas' },
  { label: 'Agregadas recientemente' },
  { label: 'Populares' },
  { label: 'Mis películas' },
  { label: 'Mi lista' },
]

const MenuList = ({ openMenu }: IMenuList) => {
  const [openModal, setOpenModal] = useState(false)

  const handleCloseModal = () => setOpenModal(false)
  const handleOpenModal = () => setOpenModal(true)

  return (
    <>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {openMenu && <Backdrop />}
      </AnimatePresence>
      <StyledMenuList>
        <ul>
          {menuItems.map((item, i: number) => (
            <MenuItem key={`menuItem-${i}`} {...item} />
          ))}
          <MenuItem>
            <Button
              label="Agregar película"
              icon={iconPlus}
              variant="ghost"
              onClick={handleOpenModal}
            />
          </MenuItem>
          <MenuItem label="Cerrar sesión" />
        </ul>
      </StyledMenuList>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {openModal ? <ModalAddMovie onClose={handleCloseModal} /> : null}
      </AnimatePresence>
    </>
  )
}

export { MenuList }
