import { useReducer } from "react";
import { useState } from "react";

function AngryButton() {
  const [ anger, dispatch ] = useReducer((anger, action) => {
    return anger < 1 ? anger + action : 0;
  }, 0);
  
  return (
    <button className="AngryButton" onClick={() => dispatch(0.1)} style={{backgroundColor: `rgba(255,0,0,${anger})`}}>
      { anger < 1 && <span>Don't click me too much!</span> }
      { anger >= 1 && <span>Rawr!</span> }
    </button>
  )
};

export default AngryButton;