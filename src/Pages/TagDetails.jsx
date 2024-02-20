import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Components/Layout'

const TagDetails = () => {

  const { id } = useParams()
  const [tag, setTag] = useState([])
  const [tagLastGames, setTagLastGames] = useState([])
  const key = import.meta.env.VITE_API_KEY

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tagResponse, gamesResponse] = await Promise.all([
          axios.get(`https://api.rawg.io/api/tags/${id}?key=${key}`),
          axios.get(`https://api.rawg.io/api/games?key=${key}&ordering=-released&tags=${id}`)
        ]);

        setTag(tagResponse.data);
        setTagLastGames(gamesResponse.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [])

  const myHTML = {
    __html: tag.description
  };

  return (
    <Layout>
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
