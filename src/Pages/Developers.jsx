import React, { useEffect, useState } from 'react'
import { useTheme } from '../Context/themeContext';
import axios from 'axios';
import requests from '../requests';
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout'
import Loader from '../Components/Loader';

const Developers = () => {

  const [developers, setDevelopers] = useState([])
  const [loading, setLoading] = useState(false)
  const { theme } = useTheme();

  useEffect(() => {
    setLoading(true)
    axios.get(requests.allDevelopers)
      .then((res) => {
        // console.log(res.data.results)
        setDevelopers(res.data.results)
        // console.log(developers)
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
      {developers.map((developer) => (
        <Link to={`/developer/${developer.id}`} key={developer.id}>
          <h2>{developer.name}</h2>
          <img src={developer.image_background} alt={developer.name} />
          <p>Games: {developer.games_count}</p>
          {developer.games.map((game) => (
            <p key={game.id}>{game.name}</p>
          ))}
        </Link>

      ))}
    </main>
  )
}

export default Developers
