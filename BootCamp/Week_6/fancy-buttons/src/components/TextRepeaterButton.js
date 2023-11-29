import { useState } from "react";

function TextRepeaterButton() {
  const [repetitions, setRepetitions] = useState(1);

  const handler = (e) => {
    setRepetitions(repetitions + 1);
  };

  let allRepetitions = [];

  for (let i = 0; i < repetitions; i++) {
    allRepetitions.push(<span key={i}>I like this text</span>);
  }

  return (
    <button className="TextRepeaterButton" onClick={handler}>
      {allRepetitions}
    </button>
  )
};

export default TextRepeaterButton;