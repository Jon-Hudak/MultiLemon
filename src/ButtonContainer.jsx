import React, { useEffect } from "react";
import { PlayerButton } from "./PlayerButton";
import {BtnBox} from "./BtnBox";
import {ButtonText} from "./ButtonText";
import {BtnCont} from "./BtnCont";




function ButtonContainer({ playerList, filter, setFilter }) {
  // useEffect(() => {
  //   console.log(filter);
  // }, [filter]);

  function renderButtons(player) {
    let buttonToggle = "orange";
    if (filter[player] === true) {
      buttonToggle = "lime";
    }
    if (player == "undefined") {
      return null;
    }
    return (
      <PlayerButton
        className=''
        onClick={(e) => handleClick(e.target.value, filter)}
        value={player}
        key={player}
        role="checkbox"
      >
        
        <BtnBox
          onClick={(e) => handleClick(e.target.value, filter)}
          inputColor={buttonToggle}
          className={`${buttonToggle} btnBox`}
          aria-hidden
        >
          ■
        </BtnBox>
        <ButtonText>{player}</ButtonText>
      </PlayerButton>
    );
  }

  function handleClick(e, filtered) {
    filtered[e] = !filtered[e];
    console.log(filtered[e]);

    setFilter((old) => ({ ...old, filtered }));
  }

  return (
    <BtnCont id="buttonCont">
      {playerList.map((playerList) => renderButtons(playerList))}
    </BtnCont>
  );
}

export default ButtonContainer;
