import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../../actions/countries";
import Spinner from "../layout/Spinner";
import "./Postcard.css";

const CountryPostcard = ({ match, history }) => {
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countries);
  const { country, loading, error } = countryDetail;

  useEffect(() => {
    dispatch(getCountry(match.params.id, history));
  }, [dispatch, match.params.id]);

  return (
    <Fragment>
      {country === null || loading ? (
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
                      src={country.image}
                      alt={country.name}
                    />
                  </div>
                  <div>
                    <div className='postcard-title'>
                      <h2>{country.name}</h2>
                      <img
                        className='postcard-flag'
                        src={country.flag}
                        alt={country.name}
                      />
                    </div>
                  </div>
                </div>
                <div className='postcard-info'>
                  <div>
                    <h3>Participations</h3>
                    <span>17</span>
                  </div>
                  <div>
                    <h3>First Participation</h3>
                    <span>{country.firstParticipation}</span>
                  </div>
                  <div className='postcard-list'>
                    <h3>Victories</h3>
                    <span>0</span>
                  </div>
                  <div className='postcard-list'>
                    <h3>Hosts</h3>
                    <span>{country.events ? country.events.length : "0"}</span>
                  </div>
                </div>
              </div>

              <div className='postcard-content'>
                <div className='postcard-bio'>
                  {country.bio &&
                    country.bio.map((bio, idx) => <p key={idx}>{bio}</p>)}
                </div>

                <div className='postcard-video'>
                  {country.video && (
                    <iframe
                      title={country.name}
                      src={`https://www.youtube.com/embed/${country.video}`}
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
  );
};

export default CountryPostcard;
