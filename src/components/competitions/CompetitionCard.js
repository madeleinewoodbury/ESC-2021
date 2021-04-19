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
          <img
            className={country.altIcon && 'alt-icon'}
            src={
              country.altIcon
                ? country.altIcon
                : `https://www.countryflags.io/${country.code}/flat/16.png`
            }
            alt={`${country.name} flag`}
          />
          <Link to={`/countries/${country._id}`}>{country.name}</Link>
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
