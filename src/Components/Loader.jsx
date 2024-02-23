import React from 'react'
import { useTheme } from '../Context/themeContext'

const Loader = () => {

  const { theme } = useTheme();

  return (
    <div className='flex space-x-4 justify-center items-center py-16'>
      <span className='sr-only'>Loading...</span>
      <div className={`h-4 w-4 bg-${theme}-700 rounded-full animate-ping [animation-delay:-0.3s]`}></div>
      <div className={`h-4 w-4 bg-${theme}-700 rounded-full animate-ping [animation-delay:-0.15s]`}></div>
      <div className={`h-4 w-4 bg-${theme}-700 rounded-full animate-ping`}></div>
    </div>
  )
}

export default Loader
