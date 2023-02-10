export type IColor = 'black' | 'white'
export type IButtonVariant = 'default' | 'outline' | 'ghost'
export type ISize = 'normal' | 'large'
export type IUploadingStatus = 'pending' | 'uploading' | 'completed' | 'error'

export interface IMovie {
  title: string
  backdrop_path: string
  vote_average?: number
  release_date?: string
  id?: number
}

export type ImagesResponse = { link: string }
export type ImagesData = { image: string; type: string }
