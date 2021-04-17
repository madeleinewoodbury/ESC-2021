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
    console.log(match.params.id)
  }, [dispatch, match.params.id])
  const comp = {
    year: 2020,
    city: 'Rotterdam',
    logo:
      'https://static.eurovision.tv/hb-cgi/images/8e849f73-e0db-4864-b5be-107028b6800f.png',
    image:
      'https://res.cloudinary.com/dsliohzpe/image/upload/v1612177797/ESC-2021/placeholder_jlghg4.jpg',
    presenter: 'Event Cancelled',
    video: 'p-E-kIFPrsY',
  }

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
                    <Link to={`/scoreboard/123`} className='btn btn-dark'>
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
