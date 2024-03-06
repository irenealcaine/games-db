import React, { useState } from 'react'
import { useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import RowItem from './RowItem'
import axios from 'axios'
import Loader from './Loader'
import Error from './Error'
import { useTheme } from '../Context/themeContext'
import LinkButton from './LinkButton'

const Row = ({ request, rowID, to }) => {

  const { theme } = useTheme()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)

    axios.get(request)
      .then((res) => {
        setItems(res.data.results)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false)
        setError(true)
      })

  }, [])

  const slideLeft = () => {
    let slider = document.getElementById('slider-' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    let slider = document.getElementById('slider-' + rowID)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      <div className="relative flex items-center group">

        <MdChevronLeft
          size={40}
          className='text-white bg-black/80 border border-white shadow-neon shadow-transparent hover:shadow-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block -left-5 transition-all'
          onClick={slideLeft}
        />

        <div
          id={'slider-' + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {items.map((item) => (
            <RowItem item={item} key={item.id} />
          ))}

        </div>

        <MdChevronRight
          size={40}
          className='text-white bg-black/80 border border-white shadow-neon shadow-transparent hover:shadow-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block -right-5 transition-all'
          onClick={slideRight}

        />

      </div>
      <div className='flex justify-end'><LinkButton to={to} value={'See more'} /></div>

    </div>
  )
}

export default Row
