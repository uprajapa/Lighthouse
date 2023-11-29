import playerData from './data/playerData';
import matchData from './data/matchData';
import './App.css';
import PlayerList from './components/PlayerList';
import { preparePlayerData, addWinsToPlayers } from './helpers/playerHelpers'
import MatchList from './components/MatchList';

function App() {

  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);

  return (
    <div className="App">
      <h1>
        Tourney Matches <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList playerData={parsedPlayerData} />
      <MatchList matchData={matchData}/>
    </div>
  );
}

export default App;
