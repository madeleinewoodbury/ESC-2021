import React from "react";
import { Link } from "react-router-dom";
const DashboardItem = ({
  vote,
  participant: { flag, country, artist, song },
}) => {
  return (
    <div className='list-item'>
      <div className='item-info'>
        <img src={country.flag} alt={country.name} />
        <Link to={`/participants/123`}>
          <h2>
            {artist}{" "}
            <span className='hide-sm'>
              <em>"{song}"</em>
            </span>
          </h2>
        </Link>
      </div>
      <div className='item-vote'>
        <h4>
          {vote} <span>points</span>
        </h4>
      </div>
    </div>
  );
};

export default DashboardItem;
