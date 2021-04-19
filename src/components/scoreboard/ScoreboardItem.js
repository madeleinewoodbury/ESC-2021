import React from 'react'
import { Link } from 'react-router-dom'

const ScoreboardItem = ({
  participant: { _id, country, artist, song, points, place },
}) => {
  return (
    <div className='list-item'>
      <div className='item-info'>
        <span className='place'>{place}</span>
        <img
          className={country.altIcon && 'alt-icon'}
          src={
            country.altIcon
              ? country.altIcon
              : `https://www.countryflags.io/${country.code}/shiny/48.png`
          }
          alt={`${country.name} flag`}
        />
        <Link to={`/history/${_id}`}>
          <h2 className='artist'>
            {artist}{' '}
            <span className='hide-sm'>
              <em>"{song}"</em>
            </span>
          </h2>
        </Link>
      </div>
      <div className='item-vote'>
        <h4>
          {points} <span>points</span>
        </h4>
      </div>
    </div>
  )
}

export default ScoreboardItem
