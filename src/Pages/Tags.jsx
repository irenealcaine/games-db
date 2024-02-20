import React, { useEffect, useState } from 'react'
import { useTheme } from '../Context/themeContext';
import axios from 'axios';
import requests from '../requests';
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout'

const Tags = () => {

  const [tags, setTags] = useState([])
  const { theme } = useTheme();

  useEffect(() => {
    axios.get(requests.allTags)
      .then((res) => {
        console.log(res.data.results)
        setTags(res.data.results)
        // console.log(genres)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <Layout>
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
