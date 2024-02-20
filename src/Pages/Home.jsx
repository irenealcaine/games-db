import React, { useEffect, useState } from 'react'
import requests from '../requests'
import axios from 'axios'
import { useTheme } from '../Context/themeContext'
import { Link } from 'react-router-dom'
import placeholder from '../assets/game-controller.svg'
import Hero from '../Components/Hero'

const Home = () => {
  const [games, setGames] = useState([])
  const [best, setBest] = useState([])
  const [last, setLast] = useState([])
  const { theme } = useTheme();

  useEffect(() => {
    axios.get(requests.bestGames).then((res) => {
      setBest(res.data.results)
    })

    axios.get(requests.lastGames).then((res) => {
      setLast(res.data.results)
    })
  }, [])

  return (
    <div className={`bg-gradient-radial from-${theme}-950 to-neutral-950 bg-cover bg-fixed text-${theme}-50`}>
      <Hero />
      <h2 className="text-4xl font-bold">Best Games</h2>
      <div className=' flex flex-wrap gap-4 justify-center'>
        {best.map((game) => (
          <Link to={`/game/${game.id}`} key={game.id} className="w-80">
            <h2>{game.name}</h2>
            <img
              className={`w-full aspect-video object-cover rounded-lg border-2 border-${theme}-900`}
              src={game.background_image || placeholder}
              alt={game.name}
            />
          </Link>
        ))}
      </div>


      <h2 className="text-4xl font-bold">Last Games</h2>

      <div className=' flex flex-wrap gap-4 justify-center'>
        {last.map((game) => (
          <Link to={`/game/${game.id}`} key={game.id} className="w-80">
            <h2>{game.name}</h2>
            <img
              className={`w-full aspect-video object-cover rounded-lg border-2 border-${theme}-900`}
              src={game.background_image || placeholder}
              alt={game.name}
            />
          </Link>
        ))}
      </div>



    </div>
  )
}

export default Home
