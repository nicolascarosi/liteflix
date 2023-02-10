interface IMenuItem {
  label?: string
  children?: React.ReactNode
}

interface IMenuList {
  openMenu: boolean
}

export type { IMenuItem, IMenuList }
