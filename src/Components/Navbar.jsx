import React, { useContext, useState } from 'react'
import { useTheme } from '../Context/themeContext';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const colors = ['red', 'green', 'blue', 'purple',
    // 'orange', 'yellow', 'lime', 'emerald',  'rose'
  ]

  const { toggleTheme, theme } = useTheme();
  const [open, setOpen] = useState(true);

  return (
    <div className={`h-full w-full md:w-40 fixed backdrop-blur-sm bg-neutral-950/90 md:bg-neutral-950 flex flex-col justify-between items-center p-4 z-10 transition
    ${open ? '' : '-translate-x-full md:translate-x-0'}
    `}>
      <p
        onClick={() => setOpen(!open)}
        className={`absolute top-4  md:hidden inline text-${theme}-700 text-xl font-extrabold ${open ? 'right-4' : '-right-8'}`}>
        {open ? 'X' : 'O'}
      </p>

      <Link to={`/`} className={`inline text-${theme}-700 text-xl font-extrabold`}>GDB</Link>

      <div className={`flex flex-col px-4 *:transition-all`}>
        <Link to={`/`} onClick={() => setOpen(false)} className={`text-${theme}-50 hover:text-${theme}-400`}>Home</Link>
        <Link to={`/genres`} onClick={() => setOpen(false)} className={`text-${theme}-50 hover:text-${theme}-400`}>Genres</Link>
        <Link to={`/developers`} onClick={() => setOpen(false)} className={`text-${theme}-50 hover:text-${theme}-400`}>Developers</Link>
        <Link to={`/tags`} onClick={() => setOpen(false)} className={`text-${theme}-50 hover:text-${theme}-400`}>Tags</Link>
      </div>
      <div className={`flex justify-around`}>
        {colors.map((color) => (
          <div key={color} className={`w-4 h-4 rounded-full bg-${color}-900 border border-${color}-500`} onClick={() => toggleTheme(color)}></div>
        ))}
      </div>
    </div>
  )
}

export default Navbar
