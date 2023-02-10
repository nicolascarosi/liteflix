import { IUploadingStatus } from 'interfaces'

interface IModalAddMovie {
  onClose: () => void
}

interface IStyledProgressBarActions {
  status: IUploadingStatus
}

export type { IModalAddMovie, IStyledProgressBarActions }
