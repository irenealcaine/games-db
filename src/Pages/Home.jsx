import React, { useEffect, useState } from 'react'
import requests from '../requests'
import axios from 'axios'
import { useTheme } from '../Context/themeContext'
import { Link } from 'react-router-dom'

const Home = () => {
  const [games, setGames] = useState([])
  const { theme } = useTheme();

  useEffect(() => {
    axios.get(requests.allGames).then((res) => {
      setGames(res.data.results)
    })
  }, [])

  return (
    <div className={`bg-gradient-to-br from-neutral-950 from-30% to-${theme}-950 text-${theme}-50 flex flex-wrap gap-4 justify-center`}>
      {games.map((game) => (
        <Link to={`/game/${game.id}`} key={game.id} className="w-80">
          <h2>{game.name}</h2>
          <img
            className={`w-full aspect-video object-cover rounded-lg border-2 border-${theme}-900`}
            src={game.background_image}
            alt={game.name}
          />
        </Link>
      ))}
    </div>
  )
}

export default Home
