import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

const initialState = {
  questions: [],

  //loading, error, ready, active, finished
  status: "loading",
};
const reducer = function (state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    default:
      throw new Error("Action unknown");
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(function () {
  //   const fetchQuestions = async function () {
  //     const res = await fetch("http://localhost:7000/questions");
  //     const data = await res.json();
  //     console.log(data);
  //   };
  //   fetchQuestions();
  // }, []);

  useEffect(() => {
    fetch(`http://localhost:7000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "error" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>SOON</p>
      </Main>
    </div>
  );
}
