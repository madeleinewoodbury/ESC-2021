import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHistory } from '../../actions/history'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import './Postcard.css'

const HistoryPostcard = ({ match, history }) => {
  const dispatch = useDispatch()
  const historyParticipant = useSelector((state) => state.history)
  const { participant, loading } = historyParticipant

  useEffect(() => {
    dispatch(getHistory(match.params.id, history))
  }, [dispatch, match.params.id, history])

  return loading || participant === null ? (
    <Spinner />
  ) : (
    <div className='postcard-container'>
      <div className='banner'></div>
      <div className='postcard'>
        <div className='postcard-top'>
          <div className='postcard-hero'>
            <div>
              <img
                className='postcard-img'
                src={participant.image}
                alt={participant.artist}
              />
            </div>
            <div>
              <div className='postcard-title'>
                <h2>{participant.artist}</h2>
                <img
                  className='postcard-flag'
                  src={participant.country.flag}
                  alt={participant.country.name}
                />
              </div>
            </div>
          </div>
          <div className='postcard-info'>
            <div>
              <h3>Country</h3>
              <div className='country-info'>
                <img
                  src={
                    participant.country.altIcon
                      ? participant.country.altIcon
                      : `https://www.countryflags.io/${participant.country.code}/flat/16.png`
                  }
                  alt={`${participant.country.name} flag`}
                />
                <Link to={`/countries/${participant.country._id}`}>
                  {participant.country.name}
                </Link>
              </div>
            </div>
            <div>
              <h3>Artist</h3>
              <span>{participant.artist}</span>
            </div>
            <div>
              <h3>Song</h3>
              <span>{participant.song}</span>
            </div>
            <div>
              <h3>Place</h3>
              <span>{participant.place}</span>
            </div>
            <div>
              <h3>Points</h3>
              <span>{participant.points}</span>
            </div>
          </div>
        </div>
        <div className='postcard-content'>
          <div className='postcard-bio'>
            {participant.bio.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          {participant.video && (
            <div className='postcard-video'>
              <iframe
                title={participant.artist}
                src={`https://www.youtube.com/embed/${participant.video}`}
                frameBorder='0'
                allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HistoryPostcard
