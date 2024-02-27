import React, { useContext, useState } from 'react'
import { useTheme } from '../Context/themeContext';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const colors = ['red', 'green', 'blue',
    // 'orange', 'yellow', 'lime', 'emerald', 'purple', 'rose'
  ]

  const { toggleTheme, theme } = useTheme();

  return (
    <div className={`h-svh w-40 fixed bg-neutral-950 flex flex-col justify-between items-center p-4`}>
      <Link to={`/`} className={`text-${theme}-700 text-xl font-extrabold`}>GDB</Link>
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
