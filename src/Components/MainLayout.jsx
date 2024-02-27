import React from 'react'
import Navbar from './Navbar'
import Layout from './Layout'

const MainLayout = ({ children }) => {
  return (
    <div className='flex'>
      <Navbar />
      <Layout>{children}</Layout>
    </div>
  )
}

export default MainLayout
