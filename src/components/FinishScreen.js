function FinishScreen({ points, numPoints, highscore, dispatch }) {
  const percentage = (points / numPoints).toFixed(2);
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {numPoints}. {percentage}%
      </p>
      <p className="highscore">
        Highscore <strong>{highscore}</strong>
      </p>
      <button
        className="btn btn-ui restart"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
