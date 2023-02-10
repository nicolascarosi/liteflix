import { IButton, Modal, ProgressBar } from 'components'
import { IModalAddMovie } from './ModalAddMovie.interface'
import { useDropzone } from 'react-dropzone'
import { Icon, isMobile, toBase64 } from 'utils'
import { iconClip } from 'assets'
import {
  StyledModalAddMovie,
  StyledProgressBarActions,
} from './ModalAddMovie.styles'
import { useState } from 'react'
import { imagesService } from 'services/images.service'
import { IMovie, IUploadingStatus } from 'interfaces'
import { useMoviesData } from 'hooks'
import { Logo } from 'layout'

const dropzoneText = isMobile
  ? 'Agregá un archivo'
  : 'Agregá un archivo o arrastralo y soltalo aquí'

const ModalAddMovie = ({ onClose }: IModalAddMovie) => {
  const [imageLink, setImageLink] = useState('')
  const [title, setTitle] = useState('')
  const [uploadStatus, setUploadStatus] = useState<IUploadingStatus>('pending')
  const [controller, setController] = useState(new AbortController())
  const [uploadFinished, setUploadFinished] = useState(false)

  const { addMovie } = useMoviesData()

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/jpg': [],
      'image/png': [],
    },
    onDrop: (files) => handleOnFileSelected(files),
  })

  const handleOnFileSelected = (files: File[]) => {
    setUploadStatus('uploading')

    toBase64(files[0]).then(async (base64) => {
      const result = await imagesService.upload(
        {
          image: base64,
          type: 'base64',
        },
        controller.signal
      )
      if (result.success) {
        setImageLink(result.data.link)
        setUploadStatus('completed')
      } else if (result === 'ERR_CANCELED') {
        setUploadStatus('pending')
      } else {
        setUploadStatus('error')
      }
    })
  }

  const handleClickUpload = () => {
    const newMovie: IMovie = {
      backdrop_path: imageLink,
      title,
    }
    addMovie(newMovie)
    setUploadFinished(true)
  }

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value)

  const handleCancelUpload = () => {
    controller.abort()
    setController(new AbortController())
  }

  const handleRetryUpload = () => {
    setUploadStatus('pending')
    setController(new AbortController())
  }

  const getStatusButton = () => {
    if (uploadStatus === 'uploading')
      return <button onClick={handleCancelUpload}>Cancelar</button>
    else if (uploadStatus === 'completed') return <button>¡Listo!</button>
    else if (uploadStatus === 'error')
      return <button onClick={handleRetryUpload}>Reintentar</button>
  }

  const getUploadingStatusElement = () => {
    if (uploadStatus === 'pending') {
      return (
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <Icon icon={iconClip} />
          <p>{dropzoneText}</p>
        </div>
      )
    } else {
      return (
        <>
          <ProgressBar status={uploadStatus} />
          <StyledProgressBarActions status={uploadStatus}>
            {getStatusButton()}
          </StyledProgressBarActions>
        </>
      )
    }
  }

  const cancelButtonModal: IButton = {
    label: 'Salir',
    onClick: onClose,
    variant: 'outline',
  }

  return (
    <Modal
      title={!uploadFinished ? 'Agregar película' : ''}
      onClose={onClose}
      confirmButton={{
        label: !uploadFinished ? 'Subir película' : 'Ir a home',
        color: 'white',
        onClick: !uploadFinished ? handleClickUpload : onClose,
        disabled: uploadStatus !== 'completed' || title.length === 0,
      }}
      cancelButton={isMobile && !uploadFinished ? cancelButtonModal : null}
    >
      <StyledModalAddMovie>
        {!uploadFinished ? (
          <>
            {getUploadingStatusElement()}
            <input
              className="custom-input"
              type="text"
              name="title"
              placeholder="Título"
              disabled={uploadStatus === 'uploading'}
              onChange={handleChangeTitle}
            ></input>
          </>
        ) : (
          <div className="final-message">
            {!isMobile && (
              <div className="logo">
                <Logo />
              </div>
            )}
            <p>
              <strong>¡Felicitaciones!</strong>
            </p>
            <p>{title} fue correctamente subida.</p>
          </div>
        )}
      </StyledModalAddMovie>
    </Modal>
  )
}

export { ModalAddMovie }
