import React, { useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import Beerfilters from './Beerfilters'

const Beercard = () => {
  const [beers, setBeers] = useState([])
  const [setTotalPages] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.punkapi.com/v2/beers?page=2&per_page=8'
      )
      setBeers(result.data)
      setTotalPages(Math.ceil(result.headers['x-total-count']/8))
    }
    fetchData()
  }, [])

  return (
    <div>
      <Beerfilters setBeers={setBeers} setTotalPages={setTotalPages} />
      <div className='cardsContainer'>
        {beers.map(beer => (
          <div className='cardInfo' key={beer.id}>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <img src={beer.image_url} alt={`${beer.name} beer`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Beercard
