import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCompetition } from '../../actions/competitions';
import { getCountries } from '../../actions/countries';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const AddCompetition = ({
  addCompetition,
  getCountries,
  countries: { countries, loading },
  history
}) => {
  useEffect(() => {
    getCountries();
  }, [getCountries]);

  const [formData, setFormData] = useState({
    country: '',
    year: '',
    host: '',
    logo: '',
    image: '',
    winner: '',
    intro: '',
    bio: '',
    youtube: ''
  });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    addCompetition(formData, history);
  };

  const {
    country,
    year,
    host,
    logo,
    image,
    winner,
    intro,
    bio,
    youtube
  } = formData;

  return loading && countries === null ? (
    <Spinner />
  ) : (
    <div className="admin-form background">
      <div className="banner"></div>
      <div className="content">
        <div className="overlay">
          <div className="container">
            <div className="container-inner">
              <h1 className="large">Add a New Competition</h1>
              <p>* = required field</p>
              <form className="form" onSubmit={e => handleSubmit(e)}>
                <div className="form-group">
                  <select
                    name="country"
                    value={country}
                    onChange={e => handleChange(e)}
                  >
                    <option value="0">* Select a Country</option>
                    {countries.map(country => (
                      <option key={country._id} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="* Year"
                    name="year"
                    value={year}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="* Host  city"
                    name="host"
                    value={host}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="* Logo URL"
                    name="logo"
                    value={logo}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Image URL"
                    name="image"
                    value={image}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="* Winner"
                    name="winner"
                    value={winner}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Intro"
                    name="intro"
                    value={intro}
                    onChange={e => handleChange(e)}
                  ></textarea>
                  <small className="form-text">Write a short intro</small>
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Bio"
                    name="bio"
                    value={bio}
                    onChange={e => handleChange(e)}
                  ></textarea>
                  <small className="form-text">
                    Write a brief bio of the competition
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Youtube link"
                    name="youtube"
                    value={youtube}
                    onChange={e => handleChange(e)}
                  />
                </div>

                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light" to="/edit-competitions">
                  Go Back
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AddCompetition.propTypes = {
  addCompetition: PropTypes.func.isRequired,
  getCountries: PropTypes.func.isRequired,
  countries: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  countries: state.countries
});

export default connect(mapStateToProps, { addCompetition, getCountries })(
  withRouter(AddCompetition)
);
