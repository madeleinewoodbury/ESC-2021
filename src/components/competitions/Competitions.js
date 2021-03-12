import React, { Fragment, useEffect } from "react";
import Spinner from "../layout/Spinner";
import events from "../../events";
import CompetitionCard from "./CompetitionCard";
import "./Competitions.css";

const Competitions = () => {
  const loading = false;

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className='competitions background'>
          <div className='banner'></div>
          <div className='content'>
            <div className='overlay'>
              <div className='container'>
                <div className='container'>
                  <div className='card-container'>
                    {events.map((competition) => (
                      <CompetitionCard
                        key={competition._id}
                        competition={competition}
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

export default Competitions;
