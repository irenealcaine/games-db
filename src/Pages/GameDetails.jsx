import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Components/Layout'
import RadialProgress from '../Components/RadialProgress'
import Loader from '../Components/Loader'

const GameDetails = () => {

  const { id } = useParams()
  const [game, setGame] = useState([])
  const key = import.meta.env.VITE_API_KEY
  const [Loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(`https://api.rawg.io/api/games/${id}?key=${key}`)
      .then((res) => {
        setGame(res.data)
        // console.log(res.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error)
        setLoading(false)
      })
  }, [])

  const myHTML = {
    __html: game.description
  };

  return (
    <Layout>
      {Loading && <Loader />}
      <div>
        <img
          src={game.background_image}
          alt={game.name}
          className='w-full h-full object-cover'
        />
      </div>
      <h1 className='text-6xl font-bold'>{game.name}</h1>
      <div dangerouslySetInnerHTML={myHTML} />
      <p>{game.released}</p>

      <div className="flex gap-4">
        {game.website && <a href={game.website} className='bg-stone-300'>Website</a>}
        {game.reddit_url && <a href={game.reddit_url} className='bg-stone-300'>Reddit</a>}
        {game.metacritic_url && <a href={game.metacritic_url} className='bg-stone-300'>Metacritic</a>}
      </div>

      {game.metacritic && <RadialProgress radius={50} percentage={game.metacritic} />}

      {game.platforms &&
        <div className="flex gap-4">
          {game?.platforms.map((platformDet) => (
            <p key={platformDet.platform.id} className='bg-orange-300'>{platformDet.platform.name}</p>
          ))}
        </div>
      }

      {game.stores &&
        <div className="flex gap-4">
          {game?.stores.map((storeDet) => (
            <p key={storeDet.id} className='bg-sky-300'>{storeDet.store.name}</p>
          ))}
        </div>
      }

      {game.developers &&
        <div className="flex gap-4">
          {game?.developers.map((developer) => (
            <p key={developer.id} className='bg-green-300'>{developer.name}</p>
          ))}
        </div>
      }

      {game.genres &&
        <div className="flex gap-4">
          {game?.genres.map((genre) => (
            <p key={genre.id} className='bg-red-300'>{genre.name}</p>
          ))}
        </div>
      }

      {game.tags &&
        <div className="flex gap-4 flex-wrap">
          {game?.tags.map((tag) => (
            <p key={tag.id} className='bg-purple-300'>{tag.name}</p>
          ))}
        </div>
      }

      {game.publishers &&
        <div className="flex gap-4">
          {game?.publishers.map((publisher) => (
            <p key={publisher.id} className='bg-emerald-300'>{publisher.name}</p>
          ))}
        </div>
      }

    </Layout>
  )
}

export default GameDetails
