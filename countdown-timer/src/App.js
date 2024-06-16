import "./App.css";
import Clock from "./components/Clock";
import React, { useEffect, useState } from "react";

export default function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMintues, setTimerMintues] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("June 16 21:59 2024").getTime();
    setInterval(() => {
      const now = new Date().getTime();
      const differences = countDownDate - now;

      if (differences < 0) {
        clearInterval(interval);
      } else {
        const seconds = Math.floor((differences % (60 * 1000)) / 1000);
        const minutes = Math.floor(
          (differences % (60 * 60 * 1000)) / (1000 * 60)
        );
        const hours = Math.floor(
          (differences % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        );
        const days = Math.floor(differences / 24 / 60 / 60 / 1000);

        setTimerDays(days);
        setTimerHours(hours);
        setTimerMintues(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="App">
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMintues={timerMintues}
        timerSeconds={timerSeconds}
      />
    </div>
  );
}
