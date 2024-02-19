import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TagDetails = () => {

  const { id } = useParams()
  const [tag, setTag] = useState([])
  const key = import.meta.env.VITE_API_KEY

  useEffect(() => {
    axios.get(`https://api.rawg.io/api/tags/${id}?key=${key}`)
      .then((res) => {
        console.log(res.data)
        setTag(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const myHTML = {
    __html: tag.description
  };

  return (
    <div>
      <h1>{tag.name}</h1>
      <img src={tag.image_background} alt={tag.name} />
      <div dangerouslySetInnerHTML={myHTML} />
    </div>
  )
}

export default TagDetails
