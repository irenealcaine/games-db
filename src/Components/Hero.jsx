import React from 'react'
import { useTheme } from '../Context/themeContext'

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div className={`w-fulltext-center flex flex-col justify-center items-center`}>
      <h1 className={`text-9xl font-bold bg-gradient-to-br from-${theme}-400 to-${theme}-800 inline-block text-transparent bg-clip-text`}>Games Data Base</h1>
    </div>
  )
}

export default Hero
