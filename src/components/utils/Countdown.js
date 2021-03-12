import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Countdown.css";

const Countdown = ({ timeTillDate }) => {
  const [timeLeft, setTimeLeft] = useState({});
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const difference = timeTillDate - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        clearInterval(intervalId);
        return;
      }

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [timeTillDate]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className='countdown'>
      <div className='countdown-timers'>
        <div className='timer'>
          <span>{days}</span> <span>days</span>
        </div>
        <div className='timer'>
          <span>{hours}</span> <span>hours</span>
        </div>
        <div className='timer'>
          <span>{minutes}</span> <span>minutes</span>
        </div>
        <div className='timer'>
          <span>{seconds}</span> <span>seconds</span>
        </div>
      </div>
      <h2>Until the Grand Final</h2>
      <Link to='/participants' className='btn btn-secondary'>
        View All Participants
      </Link>
      {/* {!isAuthenticated && (
        <p>
          <Link to="/login" className="text-primary sing-in">
            Sign in{' '}
          </Link>{' '}
          to give your votes
        </p>
      )} */}
    </div>
  );
};

export default Countdown;
