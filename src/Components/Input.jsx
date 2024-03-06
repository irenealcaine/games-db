import React from 'react'
import { useTheme } from '../Context/themeContext'

const Input = ({ type, onChange, placeholder }) => {

  const { theme } = useTheme()

  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className={`bg-transparent border-2 border-${theme}-500 rounded-xl px-4`}
    />
  )
}

export default Input
