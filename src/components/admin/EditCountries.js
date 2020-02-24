import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCountries } from '../../actions/countries';
import CountryItem from './CountryItem';

const EditCountries = ({
  auth: { user, isAuthenticated },
  getCountries,
  countries: { countries, loading },
  history
}) => {
  useEffect(() => {
    getCountries();
  }, [getCountries]);

  if (isAuthenticated && user.role !== 'admin') {
    return <Redirect to="/dashboard" />;
  }

  return loading && countries === null ? (
    <Spinner />
  ) : (
    <div className="edit-countries relative background my-3">
      <div className="banner"></div>
      <div className="content-container">
        <h1>Edit Countries</h1>
        <div className="btn-container">
          <Link to="/add-country" className="btn btn-primary">
            Add Country
          </Link>
        </div>
        <div className="countries-list">
          {countries.map(country => (
            <CountryItem
              key={country.id}
              name={country.name}
              flag={country.flag}
              id={country._id}
              history={history}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

EditCountries.propTypes = {
  auth: PropTypes.object.isRequired,
  getCountries: PropTypes.func.isRequired,
  countries: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  countries: state.countries
});

export default connect(mapStateToProps, { getCountries })(EditCountries);