import React from 'react'
import { useTheme } from '../Context/themeContext';

const Layout = ({ children }) => {

  const { theme } = useTheme();

  return (
    <div className={`min-h-screen w-full bg-gradient-radial from-${theme}-950 to-neutral-950 bg-cover bg-fixed text-${theme}-50 px-4 pl-44 md:px-16 md:pl-60 pb-16`}>{children}</div>
  )
}

export default Layout
