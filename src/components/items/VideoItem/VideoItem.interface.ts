import { IMovie } from 'interfaces'

interface IVideoItem extends IMovie {
  index: number
}

type IStyledVideoItem = Pick<IVideoItem, 'backdrop_path' | 'index'>

export type { IVideoItem, IStyledVideoItem }
