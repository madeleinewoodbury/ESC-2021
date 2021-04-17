import React from 'react'
import { Link } from 'react-router-dom'

const CompetitionCard = ({ competition }) => {
  const { logo, year, city, _id, country } = competition
  return (
    <div className='card'>
      <div className='card-img'>
        <Link className='img-link' to={`/competitions/${_id}`}>
          <img src={logo} alt={year} />
        </Link>
      </div>
      <div className='card-content'>
        <div className='card-pill'>
          <Link to={`/countries/${country._id}`}>Norway</Link>
        </div>
        <div className='card-info'>
          <Link to={`/competitions/${_id}`}>
            {city} {year}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CompetitionCard
