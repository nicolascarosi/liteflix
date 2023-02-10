interface IIcon {
  icon: string
  color?: string
  height?: number
  width?: number
}

interface IFlexContainer {
  columnGap?: string
  rowGap?: number
}

interface IGridContainer extends IFlexContainer {
  columns: number
}

export type { IIcon, IGridContainer, IFlexContainer }
