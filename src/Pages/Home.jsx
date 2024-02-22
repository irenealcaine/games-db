import React, { useEffect, useState } from 'react'
import requests from '../requests'
import axios from 'axios'
import { useTheme } from '../Context/themeContext'
import { Link } from 'react-router-dom'
import placeholder from '../assets/game-controller.svg'
import Hero from '../Components/Hero'
import Layout from '../Components/Layout'
import Loader from '../Components/Loader'

const Home = () => {
  // const [games, setGames] = useState([])
  const [best, setBest] = useState([])
  const [last, setLast] = useState([])
  const [Loading, setLoading] = useState(false)
  const { theme } = useTheme();

  useEffect(() => {

    setLoading(true)

    async function fetchData() {
      const todayDate = new Date().toISOString().split('T')[0];
      const urls = [`${requests.bestGames}`, `${requests.lastGames}&dates=2019-01-01,${todayDate}`];

      try {
        const [bestGamesResponse, lastGamesResponse] = await Promise.all(urls.map(url => axios.get(url)));
        setBest(bestGamesResponse.data.results);
        setLast(lastGamesResponse.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [])

  return (
    <Layout>
      <Hero />
      <h2 className="text-4xl font-bold">Best Games</h2>
      {Loading && <Loader />}
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
      {Loading && <Loader />}

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
