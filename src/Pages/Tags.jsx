import React, { useEffect, useState } from 'react'
import { useTheme } from '../Context/themeContext';
import axios from 'axios';
import requests from '../requests';
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout'
import Loader from '../Components/Loader';

const Tags = () => {

  const [tags, setTags] = useState([])
  const [loading, setLoading] = useState(false)
  const { theme } = useTheme();

  useEffect(() => {
    setLoading(true)
    axios.get(requests.allTags)
      .then((res) => {
        setLoading(false)
        // console.log(res.data.results)
        setTags(res.data.results)
        // console.log(genres)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [])

  return (
    <Layout>
      {loading && <Loader />}
      {tags.map((tag) => (
        <Link to={`/tag/${tag.id}`} key={tag.id}>
          <p>{tag.name}</p>
          <img src={tag.image_background} alt={tag.name} />
        </Link>
      ))}
    </Layout>
  )
}

export default Tags
