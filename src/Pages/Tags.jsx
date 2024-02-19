import React, { useEffect, useState } from 'react'
import { useTheme } from '../Context/themeContext';
import axios from 'axios';
import requests from '../requests';
import { Link } from 'react-router-dom';

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
    <div>
      {tags.map((tag) => (
        <Link to={`/tag/${tag.id}`} key={tag.id}>{tag.name}</Link>
      ))}
    </div>
  )
}

export default Tags
