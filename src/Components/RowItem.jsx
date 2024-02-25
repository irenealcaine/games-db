import React from 'react'
import placeholder from '../assets/game-controller.svg'
import { useTheme } from '../Context/themeContext'
import { Link } from 'react-router-dom';
import RadialProgress from './RadialProgress';

const RowItem = ({ item }) => {

  const { theme } = useTheme();

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative mx-2 my-6">
      <img
        className={`w-full aspect-square md:aspect-video object-cover block rounded-lg border border-${theme}-500 shadow-neon shadow-${theme}-700`}
        src={item?.background_image || placeholder}
        alt={item?.name}
      />
      <Link to={`/game/${item?.id}`}>
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 rounded-lg flex flex-col gap-2 justify-center items-center transition-all duration-200">
          <p className="w-10/12 text-pretty white-space-normal text-xs md:text-sm font-bold flex justify-center items-center text-center">
            {item?.name}
          </p>
          {item?.metacritic && <RadialProgress radius={15} percentage={item?.metacritic} />}

        </div>
      </Link>
    </div>

  )
}

export default RowItem
