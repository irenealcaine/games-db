import React, { useEffect, useState } from 'react'
import { useTheme } from '../Context/themeContext';
import axios from 'axios';
import requests from '../requests';
import { Link } from 'react-router-dom';
import Loader from '../Components/Loader';
import placeholder from '../assets/game-controller.svg'
import RadialProgress from '../Components/RadialProgress';

const BestGames = () => {

  const [loading, setLoading] = useState(false)
  const [games, setGames] = useState([])
  const [search, setSearch] = useState('')
  const [platforms, setPlatforms] = useState('')
  const [platformSearch, setPlatformSearch] = useState('')
  const { theme } = useTheme();

  useEffect(() => {
    setLoading(true)

    Promise.all([
      axios.get(requests.allPlatforms),
      axios.get(requests.bestGames + `&search=${search}&${platforms && `platforms=${platformSearch}`}`)
    ])
      .then(([platformsResponse, gamesResponse]) => {
        setPlatforms(platformsResponse.data.results)
        setGames(gamesResponse.data.results)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [search, platformSearch])

  return (
    <main>
      <h1>BestGames</h1>

      <input type="text" onChange={(e) => (setSearch(e.target.value))} />
      <select name="" id="" onChange={(e) => (setPlatformSearch(e.target.value))}>
        {platforms && platforms.map((platform) => (
          <option key={platform.id} value={platform.id}>{platform.name}</option>
        ))}
      </select>


      {loading && <Loader />}
      <div className='columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-x-0 pt-8 '>
        {games.map((game) => (
          <div className={` rounded-xl overflow-hidden px-4 pb-4 group`}>
            <Link to={`/game/${game.id}`} key={game.id}>
              <h2 className='m-2 text-xl font-bold group-hover:underline'>{game.name}</h2>
              <img className={`w-full aspect-video object-cover rounded-xl border border-${theme}-500 shadow-neon shadow-${theme}-700 group-hover:scale-105 transition-all`} src={game.background_image || placeholder} alt={game.name} />
              <div className='absolute group-hover:-translate-y-6 opacity-0 group-hover:opacity-100 transition-all bg-neutral-950 py-1 px-4 rounded-xl'>
                <div className='flex flex-wrap gap-2 items-center'>
                  {game.metacritic && <RadialProgress radius={12} percentage={game.metacritic} />}
                  {game.parent_platforms.map((platform) => (
                    <p key={platform.platform.id} className={`hidden group-hover:block`}>{platform.platform.name}</p>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))
        }
      </div >

    </main >
  )
}

export default BestGames
