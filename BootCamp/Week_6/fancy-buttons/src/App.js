import { useState } from 'react';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';
import './App.css';



function App() {

  const [light, setLight] = useState("off");
  const dark = (light === "off") ? 'dark' : '';

  const switchLight = () => {
    light === "off" ? setLight("on") : setLight("off");
  };

  return (
    <div className={`App ${dark}`}>
      <h1>Funny buttons</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} switchLight={switchLight}/>
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
