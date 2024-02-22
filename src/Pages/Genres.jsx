import React, { useEffect, useState } from 'react'
import { useTheme } from '../Context/themeContext';
import axios from 'axios';
import requests from '../requests';
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout'
import Loader from '../Components/Loader';

const Genres = () => {

  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(true)
  const { theme } = useTheme();

  useEffect(() => {
    setLoading(true)
    axios.get(requests.allGenres)
      .then((res) => {
        // console.log(res.data.results)
        setGenres(res.data.results)
        // console.log(genres)
        setLoading(false)

      })
      .catch((error) => {
        console.log(error)
        setLoading(false)

      })
  }, [])

  return (
    <Layout>
      {loading && <Loader />}
      {genres.map((genre) => (
        <Link to={`/genre/${genre.id}`} key={genre.id}>
          <h2>{genre.name}</h2>
          <img src={genre.image_background} alt={genre.name} />
          <p>Games: {genre.games_count}</p>
          {genre.games.map((game) => (
            <p key={game.id}>{game.name}</p>
          ))}
        </Link>
      ))}
    </Layout>
  )
}

export default Genres
