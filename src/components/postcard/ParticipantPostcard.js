import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getParticipant, voteOnParticipant } from '../../actions/participants'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import './Postcard.css'

const ParticipantPostcard = ({ match, history }) => {
  const dispatch = useDispatch()
  const participantDetail = useSelector((state) => state.participants)
  const auth = useSelector((state) => state.auth)
  const { participant, loading } = participantDetail
  const { user, isAuthenticated } = auth

  const [formData, setFormData] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(voteOnParticipant(match.params.id, formData))
  }

  useEffect(() => {
    dispatch(getParticipant(match.params.id, history))
    if (user) {
      let vote = user.votes.filter(
        (vote) => vote.participant.id === match.params.id
      )
      if (vote.length > 0) {
        setFormData(vote[0].vote)
      }
    }
  }, [dispatch, match.params.id, history, user])

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
              <Link to={`/countries/123`}>{participant.country.name}</Link>
            </div>
            <div>
              <h3>Artist</h3>
              <span>{participant.artist}</span>
            </div>
            <div>
              <h3>Song</h3>
              <span>{participant.song}</span>
            </div>
            {isAuthenticated && user !== null ? (
              <div className='user-votes'>
                <h3>Your Votes</h3>

                <form className='form' onSubmit={(e) => handleSubmit(e)}>
                  <div className='form-group'>
                    <select
                      name='vote'
                      value={formData}
                      onChange={(e) => setFormData(e.target.value)}
                    >
                      <option value='0'>Give your vote</option>
                      <option value='1'>1 points</option>
                      <option value='2'>2 points</option>
                      <option value='3'>3 points</option>
                      <option value='4'>4 points</option>
                      <option value='5'>5 points</option>
                      <option value='6'>6 points</option>
                      <option value='7'>7 points</option>
                      <option value='8'>8 points</option>
                      <option value='10'>10 points</option>
                      <option value='12'>12 points</option>
                    </select>
                  </div>
                  <input
                    type='submit'
                    value='Vote'
                    disabled={formData === ''}
                  />
                </form>
              </div>
            ) : null}
          </div>
        </div>

        <div className='postcard-content'>
          <div className='postcard-bio'>
            <p className='intro'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              similique, aliquid neque nobis omnis vero.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              perferendis laboriosam quos nam magnam impedit. Rerum placeat
              illum sed architecto debitis voluptatum optio a consequuntur
              molestiae non in nostrum accusantium, modi minima explicabo
              recusandae ratione autem quia veniam dolor? Eum.
            </p>
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

export default ParticipantPostcard
