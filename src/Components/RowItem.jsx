import React from 'react'
import placeholder from '../assets/game-controller.svg'
import { useTheme } from '../Context/themeContext'
import { Link } from 'react-router-dom';

const RowItem = ({ item }) => {

  const { theme } = useTheme();

  console.log(item)
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className={`w-full aspect-square md:aspect-video object-cover block`}
        src={item?.background_image || placeholder}
        alt={item?.name}
      />
      <Link to={`/game/${item?.id}`}>
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="w-10/12 text-pretty m-auto white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {item?.name}
          </p>

        </div>
      </Link>
    </div>

  )
}

export default RowItem
