import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getParticipantsByEvent } from '../../actions/scoreboard'
import { getCompetition } from '../../actions/competitions'
import ScoreboardItem from './ScoreboardItem'
import Spinner from '../layout/Spinner'
import './Scoreboard.css'

const Scoreboard = ({ match }) => {
  const dispatch = useDispatch()
  const scoreboardList = useSelector((state) => state.scoreboard)
  const competitionList = useSelector((state) => state.competitions)
  const { scoreboard, loading } = scoreboardList
  const { competition } = competitionList
  const [sortDown, toggleSortDown] = useState(true)

  useEffect(() => {
    dispatch(getParticipantsByEvent(match.params.id, 'points'))
    dispatch(getCompetition(match.params.id))
  }, [dispatch, match.params.id])

  const getResults = () => {
    if (sortDown) {
      scoreboard.sort((a, b) => (a.points < b.points ? 1 : -1))
    } else {
      scoreboard.sort((a, b) => (a.points > b.points ? 1 : -1))
    }

    let results = scoreboard.map(
      (participant) =>
        participant.final && (
          <ScoreboardItem key={participant._id} participant={participant} />
        )
    )

    return results
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className='scoreboard background'>
      <div className='banner'></div>
      <div className='content'>
        <div className='overlay'>
          <div className='container'>
            <h1 className='large'>Scoreboard </h1>
            <div className='list'>
              <div className='list-item'>
                <div className='item-title'>
                  <h2>Grand Final {competition && competition.year}</h2>
                </div>
                <div className='item-vote'>
                  <button
                    onClick={(e) => toggleSortDown(!sortDown)}
                    className='btn btn-primary'
                  >
                    {sortDown ? (
                      <span>
                        Sort <i className='fas fa-arrow-up'></i>
                      </span>
                    ) : (
                      <span>
                        Sort <i className='fas fa-arrow-down'></i>
                      </span>
                    )}
                  </button>
                </div>
              </div>
              {getResults()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scoreboard
