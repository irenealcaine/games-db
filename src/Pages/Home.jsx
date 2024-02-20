import React, { useEffect, useState } from 'react'
import requests from '../requests'
import axios from 'axios'
import { useTheme } from '../Context/themeContext'
import { Link } from 'react-router-dom'
import placeholder from '../assets/game-controller.svg'
import Hero from '../Components/Hero'
import Layout from '../Components/Layout'

const Home = () => {
  const [games, setGames] = useState([])
  const [best, setBest] = useState([])
  const [last, setLast] = useState([])
  const { theme } = useTheme();

  useEffect(() => {
    axios.get(`${requests.bestGames}`).then((res) => {
      setBest(res.data.results)
    })

    const todayDate = new Date().toISOString().split('T')[0]
    console.log(todayDate)

    axios.get(`${requests.lastGames}&dates=2019-01-01,${todayDate}`).then((res) => {
      setLast(res.data.results)
      console.log(res.data.results)
    })
  }, [])

  const radius = 120;
  const perimeter = 2 * Math.PI * radius;
  const progress = 0.75 * perimeter;

  return (
    <Layout>
      <Hero />
      <div class="flex items-center justify-center" >
        <svg class="transform -rotate-90 w-72 h-72">
          <circle cx="145" cy="145" r="120" stroke="#000" stroke-width="30" fill="transparent" class="text-gray-700" />

          <circle cx="145" cy="145" r="120" stroke="#fff" stroke-width="30" fill="transparent" class="text-blue-500 "
            strokeDasharray={perimeter}
            strokeDashoffset={perimeter - progress}
          />
        </svg>
        <span class="absolute text-5xl" x-text="70">70</span>
      </div>
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


    </Layout >

  )
}

export default Home
