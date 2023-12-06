import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  useEffect(
    function () {
      const id = setInterval(() => {
        console.log(secondsRemaining);
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch, secondsRemaining]
  );

  return <div className="timer">{secondsRemaining}</div>;
}

export default Timer;
