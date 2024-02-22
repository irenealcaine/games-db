import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Components/Layout'

const DeveloperDetails = () => {

  const { id } = useParams()
  const [developer, setDeveloper] = useState([])
  const [loading, setLoading] = useState(true)
  const key = import.meta.env.VITE_API_KEY

  useEffect(() => {
    setLoading(true)
    axios.get(`https://api.rawg.io/api/developers/${id}?key=${key}`)
      .then((res) => {
        // console.log(res.data)
        setDeveloper(res.data)
        setLoading(false)

      })
      .catch((error) => {
        console.log(error)
        setLoading(false)

      })
  }, [])

  const myHTML = {
    __html: developer.description
  };

  return (
    <Layout>
      <h1>{developer.name}</h1>
      <img src={developer.image_background} alt={developer.name} />
      <div dangerouslySetInnerHTML={myHTML} />
    </Layout>
  )
}

export default DeveloperDetails
