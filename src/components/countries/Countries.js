import React, { Fragment, useEffect } from "react";
import Spinner from "../layout/Spinner";
import countries from "../../countries";
import CountryCard from "./CountryCard";
import "./Countries.css";

const Countries = () => {
  const loading = false;

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className='countries background'>
          <div className='banner'></div>
          <div className='content'>
            <div className='overlay'>
              <div className='container'>
                <div className='container'>
                  <div className='card-container'>
                    {countries.map((country) => (
                      <CountryCard
                        key={country._id}
                        country={country.name}
                        flag={country.flag}
                        id={country._id}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Countries;
