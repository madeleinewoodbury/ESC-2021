import React from 'react'
import { Link } from 'react-router-dom'
import { getIcon } from '../../icons'

const ParticipantCard = ({ participant }) => {
  const { _id, country, artist, song, image } = participant

  return (
    <div className='card'>
      <div className='card-img'>
        <Link to={`/participants/${_id}`} className='img-link'>
          <img src={image} alt={artist} />
        </Link>
      </div>
      <div className='card-content'>
        <div className='card-pill'>
          <img
            className='small-icon'
            src={getIcon(country.code)}
            alt={`${country.name} flag`}
          />
          <Link to={`/countries/${country._id}`}>{`${country.name}`}</Link>
        </div>

        <div className='card-info'>
          <Link to={`/participants/${_id}`}>{artist}</Link>
          <span>
            <em>"{song}"</em>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ParticipantCard
