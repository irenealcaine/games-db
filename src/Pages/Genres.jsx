import React, { useEffect, useState } from 'react'
import { useTheme } from '../Context/themeContext';
import axios from 'axios';
import requests from '../requests';
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout'
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
      {genres.map((genre) => (
        <div key={genre.id}>
          <Link to={`/genre/${genre.id}`} >
            <h2>{genre.name}</h2>
            <img src={genre.image_background} alt={genre.name} className='' />
          </Link>
          <p>Related games: {genre.games_count}</p>
          {genre.games.map((game) => (
            <Link to={`/game/${game.id}`} key={game.id}>{game.name}</Link>
          ))}
        </div>
      ))}
    </main>
  )
}

export default Genres
