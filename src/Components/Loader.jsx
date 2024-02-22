import React from 'react'
import { useTheme } from '../Context/themeContext'

const Loader = () => {

  const { theme } = useTheme();

  return (
    <div class='flex space-x-4 justify-center items-center py-16'>
      <span class='sr-only'>Loading...</span>
      <div class={`h-6 w-6 bg-${theme}-700 rounded-full animate-bounce [animation-delay:-0.3s]`}></div>
      <div class={`h-6 w-6 bg-${theme}-700 rounded-full animate-bounce [animation-delay:-0.15s]`}></div>
      <div class={`h-6 w-6 bg-${theme}-700 rounded-full animate-bounce`}></div>
    </div>
  )
}

export default Loader
