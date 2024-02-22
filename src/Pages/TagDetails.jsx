import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Components/Layout'
import Loader from '../Components/Loader'

const TagDetails = () => {

  const { id } = useParams()
  const [tag, setTag] = useState([])
  const [tagLastGames, setTagLastGames] = useState([])
  const [loading, setLoading] = useState(false)
  const key = import.meta.env.VITE_API_KEY

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const [tagResponse, gamesResponse] = await Promise.all([
          axios.get(`https://api.rawg.io/api/tags/${id}?key=${key}`),
          axios.get(`https://api.rawg.io/api/games?key=${key}&ordering=-released&tags=${id}`)
        ]);

        setTag(tagResponse.data);
        setTagLastGames(gamesResponse.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [])

  const myHTML = {
    __html: tag.description
  };

  return (
    <Layout>
      {loading && <Loader />}
      <h1>{tag.name}</h1>
      <img src={tag.image_background} alt={tag.name} />
      <div dangerouslySetInnerHTML={myHTML} />
      <h2>Last games</h2>
      {tagLastGames.map((game) => (
        <div key={game.id}>
          <h2>{game.name}</h2>
          <img src={game.background_image} alt={game.name} />
        </div>
      ))}
    </Layout>
  )
}

export default TagDetails
