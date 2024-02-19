import React, { useContext, useState } from 'react'
import { useTheme } from '../Context/themeContext';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'lime', 'emerald', 'purple', 'rose']

  const { toggleTheme, theme } = useTheme();

  return (
    <div className={`bg-neutral-950 flex justify-between items-center p-4`}>
      <Link to={`/`} className={`text-white text-xl font-extrabold`}>GDB</Link>
      <div className="flex">
        <Link to={`/`} className={`text-white mx-4`}>Home</Link>
        <Link to={`/genres`} className={`text-white mx-4`}>Genres</Link>
        <Link to={`/developers`} className={`text-white mx-4`}>Developers</Link>
        <Link to={`/tags`} className={`text-white mx-4`}>Tags</Link>
      </div>
      <div className='flex'>
        {colors.map((color) => (
          <div key={color} className={`w-4 h-4 rounded-full bg-${color}-950`} onClick={() => toggleTheme(color)}></div>
        ))}
      </div>
    </div>
  )
}

export default Navbar
