import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Components/Layout'

const GenreDetails = () => {

  const { id } = useParams()
  const [genre, setGenre] = useState([])
  const key = import.meta.env.VITE_API_KEY

  useEffect(() => {
    axios.get(`https://api.rawg.io/api/genres/${id}?key=${key}`)
      .then((res) => {
        console.log(res.data)
        setGenre(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const myHTML = {
    __html: genre.description
  };

  return (
    <Layout>
      <h1>{genre.name}</h1>
      <img src={genre.image_background} alt={genre.name} />
      <p>Games: {genre.games_count}</p>

      <div dangerouslySetInnerHTML={myHTML} />
    </Layout>
  )
}

export default GenreDetails
