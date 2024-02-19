import React, { useEffect, useState } from 'react'
import { useTheme } from '../Context/themeContext';
import axios from 'axios';
import requests from '../requests';

const Developers = () => {

  const [developers, setDevelopers] = useState([])
  const { theme } = useTheme();

  useEffect(() => {
    axios.get(requests.allDevelopers)
      .then((res) => {
        console.log(res.data.results)
        setDevelopers(res.data.results)
        // console.log(developers)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      {developers.map((developer) => (
        <div key={developer.id}>
          <h2>{developer.name}</h2>
          <img src={developer.image_background} alt={developer.name} />
          <p>Games: {developer.games_count}</p>
          {developer.games.map((game) => (
            <p key={game.id}>{game.name}</p>
          ))}
        </div>

      ))}
    </div>
  )
}

export default Developers
