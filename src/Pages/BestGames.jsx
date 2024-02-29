import React, { useEffect, useState } from 'react'
import { useTheme } from '../Context/themeContext';
import axios from 'axios';
import requests from '../requests';
import { Link } from 'react-router-dom';
import Loader from '../Components/Loader';
import placeholder from '../assets/game-controller.svg'

const BestGames = () => {

  const [loading, setLoading] = useState(false)
  const [games, setGames] = useState([])
  const [search, setSearch] = useState('')
  const { theme } = useTheme();

  useEffect(() => {
    setLoading(true)
    axios.get(requests.bestGames + `&search=${search}`)
      .then((res) => {
        // console.log(res.data.results)
        setGames(res.data.results)
        // console.log(games)
        setLoading(false)

      })
      .catch((error) => {
        console.log(error)
        setLoading(false)

      })
  }, [search])
  return (
    <main>
      <h1>BestGames</h1>

      <input type="text" onChange={(e) => (setSearch(e.target.value))} />


      {loading && <Loader />}
      <div className='columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 pt-8 '>
        {games.map((game) => (
          <div className={` rounded-xl mb-8 overflow-hidden group`}>
            <Link to={`/game/${game.id}`} key={game.id}>
              <h2 className='m-2 text-xl'>{game.name}</h2>
              <img className={`w-full aspect-video object-cover rounded-xl border border-${theme}-500 shadow-neon shadow-${theme}-700 group-hover:scale-110 transition-all`} src={game.background_image || placeholder} alt={game.name} />
              <div>
                <p>Rating: {game.rating}</p>
                <div className='flex flex-wrap gap-2'>
                  {game.parent_platforms.map((platform) => (
                    <p key={platform.platform.id}>{platform.platform.name}</p>
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
