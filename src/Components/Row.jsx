import React, { useState } from 'react'
import { useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import RowItem from './RowItem'
import axios from 'axios'

const Row = ({ request, rowID }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get(request)
      .then((res) => {
        setItems(res.data.results)
        // console.log(res.data.results)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      })

  }, [])

  const slideLeft = () => {
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <div>

      <div className="relative flex items-center group">

        <MdChevronLeft
          size={40}
          className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0'
          onClick={slideLeft}
        />

        <div
          id={'slider' + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {items.map((item) => (
            <RowItem item={item} key={item.id} />
          ))}
        </div>

        <MdChevronRight
          size={40}
          className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0'
          onClick={slideRight}

        />

      </div>
      <p className='w-full text-end'>See more</p>
    </div>
  )
}

export default Row
