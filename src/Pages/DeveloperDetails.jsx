import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DeveloperDetails = () => {

  const { id } = useParams()
  const [developer, setDeveloper] = useState([])
  const key = import.meta.env.VITE_API_KEY

  useEffect(() => {
    axios.get(`https://api.rawg.io/api/developers/${id}?key=${key}`)
      .then((res) => {
        console.log(res.data)
        setDeveloper(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const myHTML = {
    __html: developer.description
  };

  return (
    <div>
      <h1>{developer.name}</h1>
      <img src={developer.image_background} alt={developer.name} />
      <div dangerouslySetInnerHTML={myHTML} />
    </div>
  )
}

export default DeveloperDetails
