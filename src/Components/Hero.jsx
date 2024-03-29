import React from 'react'
import { useTheme } from '../Context/themeContext'
import LinkButton from './LinkButton';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div className={`w-full text-center flex flex-col justify-center items-center -mt-16 py-40 gap-10 `}>
      <h1 className={`md:text-9xl text-5xl font-bold bg-gradient-to-br from-${theme}-800 via-${theme}-600 to-${theme}-800 inline-block text-transparent bg-clip-text pb-8`}>Gaming Zone</h1>
      <h2 className='w-8/12 m-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet molestiae sapiente vitae ipsa rerum quisquam quaerat voluptas molestias quod quidem dicta laboriosam facilis, ut, corrupti quia placeat sed eum illo?</h2>
      <LinkButton to={'/best'} value={'View all games'} />
    </div>
  )
}

export default Hero
