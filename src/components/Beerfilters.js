import React, { useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios'

const Beerfilters = ({ setBeers, setTotalPages }) => {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(8)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`
      )
      setBeers(result.data)
      setTotalPages(Math.ceil(result.headers['x-total-count'] / perPage))
    }
    fetchData()
  }, [page, perPage])

  return (
    <div className='filters'>
<div className='pageFilter'>
  <label htmlFor='page' >Page:</label>
  <input
    type='number'
    id='page'
    value={page}
    onChange={e => setPage(Number(e.target.value))}
    style={{
      appearance: 'none',
      border: 'none',
      background: 'none',
      padding: 0,
      width: '50%'
    }}
    placeholder='1'
  />
</div>
<div className='page'>
  <label htmlFor='perPage'>Items per page:</label>
  <input
    type='number'
    id='perPage'
    value={perPage}
    onChange={e => setPerPage(Number(e.target.value))}
    style={{
      appearance: 'none',
      border: 'none',
      background: 'none',
      padding: 0,
      width: '50%'
    }}
    placeholder='8'
  />
</div>
    </div>
  )
}

export default Beerfilters
