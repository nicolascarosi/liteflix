import { iconDropdown } from 'assets'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Icon } from 'utils'
import { ICustomSelect } from './CustomSelect.interface'
import { StyledCustomSelect } from './CustomSelect.styles'

const CustomSelect = ({ label, options, onChange }: ICustomSelect) => {
  const refDropdownButton = useRef<HTMLButtonElement>(null)
  const refDropdownBody = useRef<HTMLDivElement>(null)

  const [openDropdown, setOpenDropdown] = useState(false)
  const [selectedOption, setSelectedOption] = useState(options[0])

  const handleToggleDropdown = () => {
    setOpenDropdown((prevState) => !prevState)
  }

  const handleClickOption = (option: string) => {
    setSelectedOption(option)
    setOpenDropdown(false)
    onChange(option)
  }

  useEffect(() => {
    function handleClickOutside(this: Document, event: MouseEvent) {
      const target = event.target as Node
      if (
        refDropdownBody.current &&
        refDropdownButton.current &&
        !refDropdownBody.current.contains(target) &&
        !refDropdownButton.current.contains(target)
      ) {
        setOpenDropdown(false)
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [openDropdown])

  return (
    <StyledCustomSelect active={openDropdown}>
      <div className="select-label">
        <span>{label}:</span>
        <button
          ref={refDropdownButton}
          className="dropdown-action"
          onClick={handleToggleDropdown}
        >
          {selectedOption} <Icon icon={iconDropdown} width={14} height={10} />
        </button>
      </div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {openDropdown && (
          <motion.div
            ref={refDropdownBody}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`dropdown-body ${openDropdown && 'active'}`}
          >
            <ul>
              {options.map((option, i: number) => (
                <li key={`option-${i}`}>
                  <button
                    disabled={option === selectedOption}
                    onClick={() => handleClickOption(option)}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledCustomSelect>
  )
}

export { CustomSelect }
