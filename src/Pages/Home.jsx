import React, { useEffect, useState } from 'react'
import requests from '../requests'
import axios from 'axios'
import { useTheme } from '../Context/themeContext'
import { Link } from 'react-router-dom'
import placeholder from '../assets/game-controller.svg'
import Hero from '../Components/Hero'
import Layout from '../Components/Layout'
import Loader from '../Components/Loader'
import RadialProgress from '../Components/RadialProgress'
import Row from '../Components/Row'



const Home = () => {
  // const [games, setGames] = useState([])
  const [best, setBest] = useState([])
  const [last, setLast] = useState([])
  const [next, setNext] = useState([])
  const [loading, setLoading] = useState(false)
  const { theme } = useTheme();

  useEffect(() => {

    setLoading(true)

    async function fetchData() {
      const todayDate = new Date().toISOString().split('T')[0];
      const tomorrowDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      const urls = [`${requests.bestGames}`, `${requests.lastGames}&dates=2019-01-01,${todayDate}`, `${requests.nextGames}&dates=${tomorrowDate},2050-01-01`];

      try {
        const [bestGamesResponse, lastGamesResponse, nextGamesResponse] = await Promise.all(urls.map(url => axios.get(url)));
        setBest(bestGamesResponse.data.results);
        setLast(lastGamesResponse.data.results);
        setNext(nextGamesResponse.data.results);
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
      {loading && <Loader />}
      {/* <div className=' flex flex-wrap gap-4 justify-center'>
        {best.map((game) => (
          <Link to={`/game/${game.id}`} key={game.id} className="w-80">
            <h2>{game.name}</h2>
            <img
              className={`w-full aspect-video object-cover rounded-lg border-2 border-${theme}-900 shadow-neon shadow-${theme}-700`}
              src={game.background_image || placeholder}
              alt={game.name}
            />
            <RadialProgress radius={20} percentage={game.metacritic} />
          </Link>
        ))}
      </div> */}
      <Row request={requests.bestGames} rowID={'best'} />


      <h2 className="text-4xl font-bold">Last Games</h2>
      {loading && <Loader />}

      <div className=' flex flex-wrap gap-4 justify-center'>
        {last.map((game) => (
          <Link to={`/game/${game.id}`} key={game.id} className="w-80">
            <h2>{game.name}</h2>
            <img
              className={`w-full aspect-video object-cover rounded-lg border-2 border-${theme}-900`}
              src={game.background_image || placeholder}
              alt={game.name}
            />
            <p>{game.released}</p>
          </Link>
        ))}
      </div>

      <h2 className="text-4xl font-bold">Next Games</h2>
      {loading && <Loader />}

      <div className=' flex flex-wrap gap-4 justify-center'>
        {next.map((game) => (
          <Link to={`/game/${game.id}`} key={game.id} className="w-80">
            <h2>{game.name}</h2>
            <img
              className={`w-full aspect-video object-cover rounded-lg border-2 border-${theme}-900`}
              src={game.background_image || placeholder}
              alt={game.name}
            />
            <p>{game.released}</p>
          </Link>
        ))}
      </div>


    </Layout >

  )
}

export default Home
