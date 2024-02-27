import React, { useContext, useState } from 'react'
import { useTheme } from '../Context/themeContext';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const colors = ['red', 'green', 'blue',
    // 'orange', 'yellow', 'lime', 'emerald', 'purple', 'rose'
  ]

  const { toggleTheme, theme } = useTheme();

  return (
    <div className={`h-full w-full md:w-40 fixed backdrop-blur-sm bg-neutral-950/90 md:bg-neutral-950 flex flex-col justify-between items-center p-4 z-10`}>
      <Link to={`/`} className={`hidden md:inline text-${theme}-700 text-xl font-extrabold`}>GDB</Link>
      <Link to={`/`} className={`md:hidden inline text-${theme}-700 text-xl font-extrabold`}>X</Link>
      <div className={`flex flex-col`}>
        <Link to={`/`} className={`text-${theme}-50 mx-4`}>Home</Link>
        <Link to={`/genres`} className={`text-${theme}-50 mx-4`}>Genres</Link>
        <Link to={`/developers`} className={`text-${theme}-50 mx-4`}>Developers</Link>
        <Link to={`/tags`} className={`text-${theme}-50 mx-4`}>Tags</Link>
      </div>
      <div className='flex flex-col '>
        {colors.map((color) => (
          <div key={color} className={`w-4 h-4 rounded-full bg-${color}-900 border border-${color}-500`} onClick={() => toggleTheme(color)}></div>
        ))}
      </div>
    </div>
  )
}

export default Navbar
