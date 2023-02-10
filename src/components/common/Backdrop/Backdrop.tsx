import { motion } from 'framer-motion'
import { IBackdrop } from './Backdrop.interface'
import { StyledBackdrop } from './Backdrop.styles'

const Backdrop = ({ onClick }: IBackdrop) => {
  return (
    <StyledBackdrop
      as={motion.div}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
    />
  )
}

export { Backdrop }
