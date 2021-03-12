import React, { Fragment, useEffect } from "react";
import Spinner from "../layout/Spinner";
import "./Postcard.css";

const CountryPostcard = () => {
  const loading = false;
  const country = {
    name: "Albania",
    code: "AL",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d938a00-42af-4b60-835f-415a224a66cd.svg",
    image:
      "https://res.cloudinary.com/dsliohzpe/image/upload/v1592855644/countries/albania_pt8ebo.jpg",
    firstParticipation: 2004,
    video: "p-E-kIFPrsY",
  };
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
                    <span>0</span>
                  </div>
                </div>
              </div>

              <div className='postcard-content'>
                <div className='postcard-bio'>
                  <p className='intro'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci alias temporibus nemo.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus facere autem quis nam dolore ipsum, saepe voluptatem
                    tempora unde provident a possimus maiores incidunt dolor
                    maxime nihil quidem dignissimos omnis? Vero temporibus
                    similique rerum itaque ex cum? Illo, placeat nemo? Rerum
                    tenetur necessitatibus alias inventore, officiis iusto
                    maiores eveniet neque.
                  </p>
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
