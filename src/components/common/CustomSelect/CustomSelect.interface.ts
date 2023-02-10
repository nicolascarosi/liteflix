interface ICustomSelect {
  label: string
  options: string[]
  onChange: (option: string) => void
}

interface IStyledCustomSelect {
  active: boolean
}

export type { ICustomSelect, IStyledCustomSelect }
