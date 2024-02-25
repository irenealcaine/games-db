import React, { useEffect, useState } from 'react'
import requests from '../requests'
import axios from 'axios'
import { useTheme } from '../Context/themeContext'
import { Link } from 'react-router-dom'
import placeholder from '../assets/game-controller.svg'
import Hero from '../Components/Hero'
import Layout from '../Components/Layout'
import Loader from '../Components/Loader'
import RadialProgress from '../Components/RadialProgress'
import Row from '../Components/Row'



const Home = () => {
  // const [games, setGames] = useState([]
  const { theme } = useTheme();

  const todayDate = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];


  return (
    <Layout>
      <Hero />

      <h2 className="text-4xl font-bold">Best Games</h2>
      <Row request={requests.bestGames} rowID={'best-'} />


      <h2 className="text-4xl font-bold">Last Games</h2>
      <Row request={`${requests.lastGames}&dates=2019-01-01,${todayDate}`} rowID={'last-'} />

      <h2 className="text-4xl font-bold">Next Games</h2>
      <Row request={`${requests.nextGames}&dates=${tomorrowDate},2050-01-01`} rowID={'next-'} />

    </Layout >

  )
}

export default Home
