import { useState } from "react";

function CounterButton() {
  const [ clickAmount, setClickAmount ] = useState(0);

  const handler = (e) => {
    setClickAmount(clickAmount + 1);
  };

  return (
    <button className="CounterButton" onClick={handler}>
      You clicked me {clickAmount} amount of times
    </button>
  )
};

export default CounterButton;