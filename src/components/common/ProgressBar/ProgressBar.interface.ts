import { IUploadingStatus } from 'interfaces'

interface IProgressBar {
  status: IUploadingStatus
}

interface IStyledProgressBar extends IProgressBar {
  uploadPercentage: number
}

export type { IProgressBar, IStyledProgressBar }
