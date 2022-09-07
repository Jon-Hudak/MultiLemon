import { useEffect, useState } from "react";
import {AppCont} from "./AppCont";
import ButtonContainer from "./ButtonContainer";
import {GameBarSt} from "./GameBarSt";
import {GameList} from "./GameList";
import getGoogleSheet from "./getGoogleSheet"
import getPlayers from "./getPlayers";
import './App.css';
import { FlexBuffer } from "./FlexBuffer";


const FREE_INDEX = 1;
const RACE_INDEX = 2;
const TITLE_INDEX = 0;
const FIRST_PLAYER_INDEX = 3;

const HEADERS = 0;
const FIRST_GAME_INDEX = 1;

export default function App() {
  const [filter, setFilter] = useState({});
  const [playerList, setPlayerList] = useState([]);
  const [games, setGames] = useState([]);
  
  useEffect(()=>{

     async function promiseHell()  {
      let response = await getGoogleSheet();
      return response.values;
      
    }
    promiseHell().then(response=>{
      setGames(response);
      let players = getPlayers(response, FIRST_PLAYER_INDEX, HEADERS);
      setPlayerList(Object.keys(players));
      
    });
    
   
    
  },[])
  //console.log(games)
  
  

  function renderGameList(value, filter) {
    if (value[TITLE_INDEX] !== "Title") {
      for (const p in filter) {
        let regEx = new RegExp(`\\b${p}\\b`,"i") // "/" needs escaped in string literal. Translates to /\b${p}\b/
        console.log(value[TITLE_INDEX], p);
        if (filter[p] === true ) {
          if (!value.some(x=>regEx.test(x))) {
            return null;
          }
        }
      }
              
      return <GameBarSt key={value[TITLE_INDEX]}>{value[TITLE_INDEX]}</GameBarSt>;

      
    }
  }
  return (
    <div id="bodyCont">
      <AppCont className="appContainer"> 
          <ButtonContainer
            className="buttonContainer"
            playerList={playerList}
            filter={filter}
            setFilter={setFilter}
          />
          <GameList id="gameListUl">{games.map((games) => renderGameList(games, filter))}</GameList>
          <FlexBuffer className="flexBuffer"></FlexBuffer>
          
        </AppCont>
        </div>
  );
}
