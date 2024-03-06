import React, { useEffect, useState } from 'react'
import { useTheme } from '../Context/themeContext';
import axios from 'axios';
import requests from '../requests';
import { Link } from 'react-router-dom';
import Loader from '../Components/Loader';

const Genres = () => {

  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(false)
  const { theme } = useTheme();

  useEffect(() => {
    setLoading(true)
    axios.get(requests.allGenres)

      .then((res) => {
        setGenres(res.data.results)
        setLoading(false)
      })

      .catch((error) => {
        console.log(error)
        setLoading(false)
      })

  }, [])

  return (
    <main>
      {loading && <Loader />}
      <div className='flex flex-wrap gap-4'>
        {genres.map((genre) => (
          <div key={genre.id} className='relative border w-72 aspect-video rounded-lg overflow-hidden group'>
            <Link to={`/genre/${genre.id}`} >
              <h2 className={`absolute top-4 left-4 z-20 py-1 px-4 bg-${theme}-900 bg-opacity-80 rounded-md group-hover:underline`}>{genre.name}</h2>
              <img src={genre.image_background} alt={genre.name} className='absolute top-0 w-full aspect-video object-cover z-10 group-hover:scale-105 transition-all' />
            </Link>
            {/* <p>Related games: {genre.games_count}</p> */}
            {/* <div className='flex gap-2 flex-wrap'>
              {genre.games.map((game) => (
                <Link to={`/game/${game.id}`} key={game.id}>{game.name}</Link>
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </main>
  )
}

export default Genres
