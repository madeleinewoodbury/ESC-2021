import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCompetition } from '../../actions/competitions'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import './Postcard.css'

const CountryPostcard = ({ match, history }) => {
  const dispatch = useDispatch()
  const competitionDetail = useSelector((state) => state.competitions)
  const { competition, loading } = competitionDetail

  useEffect(() => {
    dispatch(getCompetition(match.params.id, history))
  }, [dispatch, match.params.id, history])

  return (
    <Fragment>
      {competition === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className='postcard-container'>
            <div className='banner'></div>
            <div className='postcard'>
              <div className='postcard-top'>
                <div className='postcard-hero'>
                  <div>
                    <img
                      className='postcard-img'
                      src={competition.image}
                      alt={competition.city}
                    />
                  </div>
                  <div>
                    <div className='postcard-title'>
                      <h2 className='competition-host'>
                        {competition.city} {competition.year}
                      </h2>
                      <img
                        className='postcard-logo'
                        src={competition.logo}
                        alt={competition.year}
                      />
                    </div>
                  </div>
                </div>
                <div className='postcard-info'>
                  <div>
                    <h3>Country</h3>
                    <Link to={`/countries/${competition.country._id}`}>
                      {competition.country.name}
                    </Link>
                  </div>
                  <div>
                    <h3>Year</h3>
                    <span>{competition.year}</span>
                  </div>
                  <div>
                    <h3>City</h3>
                    <span>{competition.city}</span>
                  </div>
                  <div>
                    <h3>Presenter</h3>
                    <span>{competition.presenter}</span>
                  </div>
                  <div>
                    <h3>Winner</h3>
                    <span>No Winner</span>
                  </div>
                  <div className='results'>
                    <Link
                      to={`/scoreboard/${competition._id}`}
                      className='btn btn-dark'
                    >
                      View Results
                    </Link>
                  </div>
                </div>
              </div>

              <div className='postcard-content'>
                <div className='postcard-bio'>
                  {competition.bio.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className='postcard-video'>
                  {competition.video && (
                    <iframe
                      title={competition.year}
                      src={`https://www.youtube.com/embed/${competition.video}`}
                      frameBorder='0'
                      allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default CountryPostcard
