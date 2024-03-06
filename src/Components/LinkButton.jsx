import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../Context/themeContext'

const LinkButton = ({ to, value }) => {

  const { theme } = useTheme()

  return (
    <Link to={to} className={`bg-${theme}-900 hover:bg-${theme}-700 border border-${theme}-500 px-4 py-1 rounded-lg transition-all`}>{value}</Link>
  )
}

export default LinkButton
