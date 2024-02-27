import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Components/Layout'
import Loader from '../Components/Loader'

const GenreDetails = () => {

  const { id } = useParams()
  const [genre, setGenre] = useState([])
  const [loading, setLoading] = useState(false)
  const key = import.meta.env.VITE_API_KEY

  useEffect(() => {
    setLoading(true)
    axios.get(`https://api.rawg.io/api/genres/${id}?key=${key}`)
      .then((res) => {
        // console.log(res.data)
        setGenre(res.data)
        setLoading(false)

      })
      .catch((error) => {
        console.log(error)
        setLoading(false)

      })
  }, [])

  const myHTML = {
    __html: genre.description
  };

  return (
    <main>
      {loading && <Loader />}
      <h1>{genre.name}</h1>
      <img src={genre.image_background} alt={genre.name} />
      <p>Games: {genre.games_count}</p>

      <div dangerouslySetInnerHTML={myHTML} />
    </main>
  )
}

export default GenreDetails
