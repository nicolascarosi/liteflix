interface IHero {
  title: string
  backgroundImage: string
  original?: boolean
}

type IStyledHero = Pick<IHero, 'backgroundImage'>

export type { IHero, IStyledHero }
