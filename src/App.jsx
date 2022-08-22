import { useEffect, useState } from "react";
import {AppCont} from "./AppCont";
import ButtonContainer from "./ButtonContainer";
import {GameBarSt} from "./GameBarSt";
import {GameList} from "./GameList";
import getGoogleSheet from "./getGoogleSheet"
import getPlayers from "./getPlayers";
import './App.css';

const FREE_INDEX = 1;
const RACE_INDEX = 2;
const TITLE_INDEX = 0;
const FIRST_PLAYER_INDEX = 3;

const HEADERS = 0;
const FIRST_GAME_INDEX = 1;

export default async function App() {
  const [filter, setFilter] = useState();
  let response= await getGoogleSheet();
  const values=response.values;
  const players=getPlayers(values, FIRST_PLAYER_INDEX, HEADERS);
  const playerList=Object.keys(players);
 
  

  function renderGameList(value, filter) {
    if (value[TITLE_INDEX] !== "Title") {
      for (const p in filter) {
        if (filter[p] === true) {
          if (!value.includes(p)) {
            return null;
          }
        }
      }
              
      return <GameBarSt key={value[TITLE_INDEX]}>{value[TITLE_INDEX]}</GameBarSt>;

      
    }
  }
  return (
    <>
      
      <AppCont className="appContainer"> 
        <ButtonContainer
          playerList={playerList}
          filter={filter}
          setFilter={setFilter}
        />
         <GameList id="gameListUl">{values.map((values) => renderGameList(values, filter))}</GameList>
        
      </AppCont>
    </>
  );
}
