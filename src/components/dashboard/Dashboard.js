import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Spinner from "../layout/Spinner";
import DashboardItem from "./DashboardItem";
import "./Dashboard.css";

const Dashboard = () => {
  const loading = false;
  const user = {
    name: "John Doe",
    votes: [
      {
        _id: 1,
        participant: {
          country: {
            name: "Albania",
            code: "AL",
            flag:
              "https://eurovision.tv/image/8d938a00-42af-4b60-835f-415a224a66cd.svg",
          },
          artist: "Arilena Ara",
          song: "Fall From The Sky",
        },
        vote: 5,
      },
      {
        _id: 2,
        participant: {
          country: {
            name: "Ireland",
            code: "IE",
            flag:
              "https://static.eurovision.tv/hb-cgi/images/8d93887b-7df6-40dc-bfa5-aa99d70ac957.svg",
          },
          artist: "Lesley Roy",
          song: "Story Of My Life",
        },
        vote: 8,
      },
      {
        _id: 3,
        participant: {
          country: {
            name: "Iceland",
            code: "IS",
            flag:
              "https://static.eurovision.tv/hb-cgi/images/8d9a46c4-def5-4b18-b4af-375320fbac0e.svg",
          },
          artist: "Daði & Gagnamagnið",
          song: "Gagnamagnið (Think About Things)",
        },
        vote: 12,
      },
    ],
  };
  const [sortDown, toggleSortDown] = useState(true);

  // if (!isAuthenticated) {
  //   return <Redirect to="/" />;
  // }

  const getUserVotes = () => {
    if (sortDown) {
      user.votes.sort((a, b) => (a.vote < b.vote ? 1 : -1));
    } else {
      user.votes.sort((a, b) => (a.vote > b.vote ? 1 : -1));
    }

    let userVotes = user.votes.map((vote) => (
      <DashboardItem
        key={vote._id}
        participant={vote.participant}
        vote={vote.vote}
      />
    ));
    return userVotes;
  };

  return loading && user === null ? (
    <Spinner />
  ) : (
    <div className='dashboard background'>
      <div className='banner'></div>
      <div className='content'>
        <div className='overlay'>
          <div className='container'>
            <h1 className='large'>Welcome {user && user.name.split(" ")[0]}</h1>

            {user && user.votes.length === 0 ? (
              <div className='no-votes'>
                <p className='lead'>
                  You have not voted on any participants yet...
                </p>
                <Link to='/participants' className='btn btn-primary'>
                  View Participants
                </Link>
              </div>
            ) : (
              <div className='list'>
                <div className='list-item'>
                  <div className='item-title'>
                    <h2>Participants</h2>
                  </div>
                  <div className='item-vote'>
                    <button
                      onClick={(e) => toggleSortDown(!sortDown)}
                      className='btn btn-primary'
                    >
                      {sortDown ? (
                        <span>
                          <span className='hide-xs'>Sort</span>{" "}
                          <i className='fas fa-arrow-up'></i>
                        </span>
                      ) : (
                        <span>
                          <span className='hide-xs'>Sort</span>{" "}
                          <i className='fas fa-arrow-down'></i>
                        </span>
                      )}
                    </button>
                  </div>
                </div>
                {user && getUserVotes()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
