import { useEffect, useState } from 'react'
import { IProgressBar } from './ProgressBar.interface'
import { StyledProgressBar } from './ProgressBar.styles'

const ProgressBar = ({ status }: IProgressBar) => {
  const [uploadPercentage, setUploadPercentage] = useState(0)

  useEffect(() => {
    let currentProgress = 0
    if (status === 'completed') {
      const interval = setInterval(function () {
        currentProgress += 10
        setUploadPercentage(currentProgress)
        if (currentProgress >= 100) clearInterval(interval)
      }, 100)
    } else if (status === 'error') setUploadPercentage(100)
  }, [status])

  const geStatusText = () => {
    console.log(status)
    if (status === 'completed' && uploadPercentage === 100) {
      return (
        <p>
          <strong>{uploadPercentage}% Cargado</strong>
        </p>
      )
    } else if (status === 'error') {
      return <p>¡Error! No se pudo cargar la película</p>
    } else {
      return (
        <p>
          Cargando <strong>{uploadPercentage}%</strong>
        </p>
      )
    }
  }

  return (
    <StyledProgressBar uploadPercentage={uploadPercentage} status={status}>
      {geStatusText()}
      <div className="progress-bar"></div>
    </StyledProgressBar>
  )
}

export { ProgressBar }
