import React from 'react'
import { useTheme } from '../Context/themeContext'

const Select = ({ children, name, onChange }) => {

  const { theme } = useTheme()

  return (
    <select
      name={name}
      onChange={onChange}
      className={`bg-transparent border-2 border-${theme}-500 rounded-xl px-4`}
    >
      {children}
    </select>
  )
}

export default Select
