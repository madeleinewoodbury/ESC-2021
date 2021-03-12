import React from "react";
import { Link } from "react-router-dom";

const CompetitionCard = ({ competition }) => {
  const { logo, year, city } = competition;
  return (
    <div className='card'>
      <div className='card-img'>
        <Link className='img-link' to={`/competitions/123`}>
          <img src={logo} alt={year} />
        </Link>
      </div>
      <div className='card-content'>
        <div className='card-pill'>
          <Link to={`/countries/123`}>Norway</Link>
        </div>
        <div className='card-info'>
          <Link to={`/competitions/123`}>
            {city} {year}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;
