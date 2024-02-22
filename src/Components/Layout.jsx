import React from 'react'
import { useTheme } from '../Context/themeContext';

const Layout = ({ children }) => {

  const { theme } = useTheme();

  return (
    <div className={`min-h-screen bg-gradient-radial from-${theme}-950 to-neutral-950 bg-cover bg-fixed text-${theme}-50 px-16 pb-16`}>{children}</div>
  )
}

export default Layout
