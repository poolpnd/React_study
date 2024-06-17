import React, { useContext, useEffect, useState } from "react";
import Timer from "./Timer";
import { BsFillPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs";
import { CountContext } from "../contexts/counter-context";

export default function CountDown() {
  const {count, setCount} = useContext(CountContext)
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setmilliseconds] = useState(0);
  const [isRunning, setIsrunning] = useState(null);
  // End of Time

  const [showEndScreen,  setShowEndScreen] = useState({
    show: false,
    message: 'This is message for Header'
  })


  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (milliseconds > 0) {
          setmilliseconds((milliseconds) => {
            return milliseconds - 1;
          });
        } else if (seconds > 0) {
          setSeconds((seconds) => {     
            return seconds - 1;
          });
          setmilliseconds(99);
        } else if (mins > 0) {
          setMins((mins) => {
            return mins - 1;
          });
          setSeconds(59);
          setmilliseconds(99);
        } else if (hours > 0) {
          setHours((hours) => {
            return hours - 1;
          });
          setMins(59);
          setSeconds(59);
          setmilliseconds(99);
        }
      }, 10);
    }

    if( hours ===0 && mins === 0 && seconds ===0 && milliseconds ===0){
      setShowEndScreen({...showEndScreen, show: true})
    }
    return () => clearInterval(interval);
  }, [milliseconds, seconds, mins, hours, isRunning, showEndScreen]);

  const changeSeconds = (e) => {
    setSeconds(e.target.value);
  };

  const changeMins = (e) => {
    setMins(e.target.value);
  };

  const changeHours = (e) => {
    setHours(e.target.value);
  };

  // start & puase & stop functions
  const startTimer = ()=>{
    if( hours !==0 || mins !== 0 || seconds !== 0 || milliseconds !== 0){
      setIsrunning(true)
      setShowEndScreen({...showEndScreen, show: false})
    }else{
      window.alert('add time')
    }
  }

  const puaseTimer = ()=>{
    setIsrunning(false)
  }

  const stopTimer = ()=>{
    resetTimer()
}

  const resetTimer = ()=>{
    setIsrunning(false)
    setShowEndScreen({...showEndScreen, show: true})
    setHours(0)
    setMins(0)
    setSeconds(0)
    setmilliseconds(0)
  }

  return (
    <div>
      <button className="btn" onClick={() =>setCount(prev => prev+1)}>
        {count}
      </button>
      {showEndScreen.show && <h1 className="title"> {showEndScreen.message}</h1>}

      <Timer
        ms={milliseconds}
        mm={mins}
        ss={seconds}
        hh={hours}
        changeSeconds={changeSeconds}
        changeMins={changeMins}
        changeHours={changeHours}
      />
      <br />

      {!isRunning && (
        <button className="btn btn-accept btn-lg" onClick={startTimer}>
          <BsFillPlayFill />
        </button>
      )}
      {isRunning && (
        <button className="btn btn-warning btn-lg" onClick= {puaseTimer}>
          <BsPauseFill />
        </button>
      )} {" "}

        <button className="btn btn-danger btn-lg" onClick={stopTimer}>
          <BsStopFill />
        </button>
    </div>
  );
}
